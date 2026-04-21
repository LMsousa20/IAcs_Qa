require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs-extra");
const path = require("path");
const { Groq } = require("groq-sdk");
const { exec } = require("child_process");
const db = require("./src/database");
const { v4: uuidv4 } = require("uuid"); // Para IDs de sessão

const app = express();
const port = 3000;

let isUpdating = false; // Flag para bloquear o chat durante atualização

// Configuração Groq
const apiKey = process.env.GROQ_IA_API_KEY || process.env.GROQ_API_KEY;
if (!apiKey) {
  console.error("❌ ERRO: Chave API da Groq não encontrada no .env (GROQ_IA_API_KEY ou GROQ_API_KEY)");
}
const groq = new Groq({ apiKey: apiKey });
const MODEL = "llama-3.1-70b-versatile";

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const CONFIG_DIR = path.join(__dirname, "config");
const DOCS_DIR = path.join(__dirname, "documentacao");
const LOG_FILE = path.join(__dirname, "conversas.log");
const SYSTEM_PROMPT_PATH = path.join(CONFIG_DIR, "INSTRUCOES_PROMPT_IA.md");

// Cache em memória simples para os documentos
let docIndex = [];

async function carregarDocumentacao() {
  console.log("📂 Indexando documentos para o RAG...");
  const files = await fs.readdir(DOCS_DIR, { recursive: true });

  for (const file of files) {
    if (file.endsWith(".md")) {
      const fullPath = path.join(DOCS_DIR, file);
      const content = await fs.readFile(fullPath, "utf-8");
      const title = path.basename(file, ".md").replace(/-/g, " ");

      docIndex.push({
        title,
        path: file,
        content: content.substring(0, 5000) // Pega o conteúdo principal
      });
    }
  }
  console.log(`✅ ${docIndex.length} documentos indexados.`);
}

async function logConversa(pergunta, resposta) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}]\nUSER: ${pergunta}\nAI: ${resposta}\n${"-".repeat(50)}\n`;
  await fs.appendFile(LOG_FILE, logEntry);
}

// Lógica RAG Simples com Contexto: Busca por palavras-chave
function buscarContexto(query, history = []) {
  // Se a query for muito curta (ex: "detalhe isso"), tenta pegar o assunto da última mensagem
  let queryExtendida = query;
  if (query.split(" ").length < 4 && history.length > 0) {
    const ultimaUserMsg = [...history].reverse().find(m => m.role === 'user');
    if (ultimaUserMsg) {
      queryExtendida = `${ultimaUserMsg.content} ${query}`;
      console.log(`🔄 Query estendida para melhor busca: "${queryExtendida}"`);
    }
  }

  const termos = queryExtendida.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .split(/\W+/)
    .filter(t => t.length > 2);
  
  console.log(`\n🔍 Buscando contexto para: "${query}"`);
  console.log(`🏷️  Termos extraídos: [${termos.join(", ")}]`);

  // Pontua documentos baseados na ocorrência de termos
  const resultados = docIndex.map(doc => {
    let score = 0;
    const searchBase = (doc.title + " " + doc.content).toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    termos.forEach(termo => {
      if (doc.title.toLowerCase().includes(termo)) score += 15; // Mais peso para título
      if (doc.content.toLowerCase().includes(termo)) score += 2;
    });

    return { ...doc, score };
  })
    .filter(d => d.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4); // Aumentado para top 4 para dar mais contexto

  if (resultados.length > 0) {
    console.log("📄 Documentos selecionados:");
    resultados.forEach(r => console.log(`   - [Score: ${r.score}] ${r.title} (${r.path})`));
  } else {
    console.log("⚠️ Nenhum documento relevante encontrado.");
  }

  return resultados.map(r => `Documento: ${r.title}\nCaminho: ${r.path}\nConteúdo:\n${r.content}`).join("\n\n---\n\n");
}

app.post("/api/chat", async (req, res) => {
  if (isUpdating) {
    return res.status(503).json({ error: "A documentação está sendo atualizada. Por favor, aguarde alguns instantes." });
  }

  let { message, history, sessionId } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Mensagem vazia" });
  }

  // Gera ou recupera sessão
  if (!sessionId) {
    sessionId = uuidv4();
    db.createSession(sessionId, message.substring(0, 30) + "...");
  }

  try {
    const systemPrompt = await fs.readFile(SYSTEM_PROMPT_PATH, "utf-8");
    
    // Se não veio histórico do frontend, tenta pegar do banco
    if (!history || history.length === 0) {
      const savedMessages = db.getMessages(sessionId);
      history = savedMessages.map(m => ({ role: m.role, content: m.content }));
    }

    const contexto = buscarContexto(message, history || []);
    
    console.log(`🤖 Enviando para Groq (${MODEL})...`);
    
    const contextContent = `
CONTEXTO DA DOCUMENTAÇÃO ACS:
${contexto || "Nenhuma documentação específica encontrada para esta dúvida."}
`;

    const messages = [
      { role: "system", content: systemPrompt },
      ...(history || []).map(m => ({ role: m.role === 'ai' ? 'assistant' : 'user', content: m.content })),
      { role: "user", content: `${contextContent}\n\nPERGUNTA ATUAL: ${message}` }
    ];

    const chatCompletion = await groq.chat.completions.create({
      messages: messages,
      model: MODEL,
      temperature: 0.1,
      max_tokens: 2048,
    });

    const resposta = chatCompletion.choices[0]?.message?.content || "Desculpe, não consegui processar sua resposta.";
    
    // Persistência no SQLite
    db.saveMessage(sessionId, "user", message);
    db.saveMessage(sessionId, "ai", resposta);

    res.json({ response: resposta, sessionId });
  } catch (error) {
    console.error("Erro na API:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
});

// Endpoints de Sessão
app.get("/api/sessions", (req, res) => {
  res.json(db.getSessions());
});

app.get("/api/sessions/:id", (req, res) => {
  res.json(db.getMessages(req.params.id));
});

// Rota para disparar a atualização da documentação
app.post("/api/update-docs", async (req, res) => {
  if (isUpdating) return res.status(400).json({ error: "Já existe uma atualização em curso." });

  isUpdating = true;
  console.log("\n🔄 Iniciando ciclo de atualização de documentação...");

  try {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backupDir = `${DOCS_DIR}_backup_${timestamp}`;

    // 1. Faz backup da pasta atual (se existir)
    if (await fs.pathExists(DOCS_DIR)) {
      console.log(`📦 Criando backup em: ${backupDir}`);
      await fs.move(DOCS_DIR, backupDir);
    }

    // 2. Executa o script de extração
    console.log("📥 Executando scraper do Confluence (src/scraper.js)...");
    
    const runScraper = () => new Promise((resolve, reject) => {
       exec("node src/scraper.js", (error, stdout, stderr) => {
         if (error) reject(error);
         else resolve();
       });
    });

    try {
      await runScraper();
      console.log("✅ Scraper finalizado com sucesso.");
      
      // Limpeza de Backup após o sucesso
      await fs.remove(backupDir).catch(e => console.log("⚠️ erro ao remover backup:", e.message));
      console.log("🧹 Pasta de backup removida.");
      
      // 3. Re-indexa os novos arquivos
      docIndex = []; 
      await carregarDocumentacao();
      
      isUpdating = false;
      console.log("✨ Base de conhecimento atualizada e chat liberado!");
      res.json({ message: "Documentação atualizada com sucesso!", count: docIndex.length });
    } catch (error) {
      console.error(`❌ Erro no scraper: ${error.message}`);
      // Tenta restaurar o backup
      if (await fs.pathExists(backupDir)) {
        await fs.remove(DOCS_DIR).catch(() => {});
        await fs.move(backupDir, DOCS_DIR);
      }
      isUpdating = false;
      res.status(500).json({ error: "Erro ao executar a extração dos dados." });
    }

  } catch (erro) {
    console.error("❌ Erro no processo de atualização:", erro);
    isUpdating = false;
    res.status(500).json({ error: "Falha ao iniciar atualização" });
  }
});

carregarDocumentacao().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
  });
});
