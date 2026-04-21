const puppeteer = require("puppeteer");
const fs = require("fs-extra");
const slugify = require("slugify");
const TurndownService = require("turndown");

const BASE_URL = "https://acsapps.atlassian.net/wiki/spaces/acsdocumentacao/overview?homepageId=983272";
const OUTPUT_DIR = "./documentacao";
const SPACE_KEY = "acsdocumentacao";
const turndownService = new TurndownService();

function limparNome(texto) {
  return slugify(texto || "sem-nome", { lower: true, strict: true });
}

async function executar() {
  console.log("🚀 Iniciando extração via API do Confluence...");

  const browser = await puppeteer.launch({
    headless: "new",
    userDataDir: "./chrome-session",
    defaultViewport: null,
    args: ["--start-maximized", "--window-size=1920,1080"]
  });

  const page = await browser.newPage();
  await page.goto(BASE_URL, { waitUntil: "networkidle2" });

  console.log("🔐 Aguardando 5 segundos para garantir a sessão e login...");
  await new Promise(r => setTimeout(r, 5000));

  console.log("🔎 Buscando páginas e hierarquia de pastas pela API...");

  const data = await page.evaluate(async (spaceKey) => {
    try {
      // 1. Pega o ID do espaço baseado na chave
      const res1 = await fetch('/wiki/api/v2/spaces?keys=' + spaceKey);
      const json1 = await res1.json();
      if (!json1.results || json1.results.length === 0) {
        return { error: "Espaço não encontrado. Verifique se o spaceKey está correto." };
      }
      const spaceId = json1.results[0].id;

      let allPages = [];
      
      // 2. Busca as páginas usando a API V2 (status current, com conteúdo HTML)
      let nextUrl = '/wiki/api/v2/spaces/' + spaceId + '/pages?body-format=storage&status=current&limit=250';

      while (nextUrl) {
        const res = await fetch(nextUrl);
        const json = await res.json();
        
        if (json.results) {
          allPages = allPages.concat(json.results.map(p => ({
            id: p.id,
            title: p.title,
            parentId: p.parentId, // Essencial para recriar as pastas
            body: p.body?.storage?.value || "" // Conteúdo HTML da página
          })));
        }

        // Paginação
        if (json._links && json._links.next) {
          nextUrl = json._links.next;
          // Confluence normalmente retorna next como url com começo "/"
          if (!nextUrl.startsWith('/')) {
            nextUrl = '/' + nextUrl;
          }
        } else {
          nextUrl = null;
        }
      }
      return { pages: allPages };
    } catch (e) {
      return { error: e.message };
    }
  }, SPACE_KEY);

  await browser.close();

  if (data.error) {
    console.error("❌ Erro ao buscar da API:", data.error);
    return;
  }

  const paginas = data.pages;
  console.log(`✅ ${paginas.length} páginas carregadas com sucesso!`);

  // Construir mapa para lookup rápido e recriar os caminhos das pastas
  const pageMap = new Map();
  paginas.forEach(p => pageMap.set(p.id, p));

  console.log("📂 Criando as pastas e salvando as documentações...");

  for (const page of paginas) {
    const caminhoPastas = [];
    let atual = page;
    let fallbackCounter = 0;

    // Sobe as árvores de pai em pai (parentId) para montar a estrutura das pastas
    while (atual && atual.parentId && fallbackCounter < 20) {
      const pai = pageMap.get(atual.parentId);
      if (!pai) break; // Final da linha (exemplo: página root não listada)
      
      caminhoPastas.unshift(limparNome(pai.title));
      atual = pai;
      fallbackCounter++;
    }

    // Se o caminho estiver vazio, coloca na raiz (ou pasta "geral")
    const pastaRelativa = caminhoPastas.length > 0 ? caminhoPastas.join("/") : "geral";
    const pastaPath = `${OUTPUT_DIR}/${pastaRelativa}`;
    
    // Cria os diretórios no disco de forma assíncrona recursivamente
    await fs.ensureDir(pastaPath);

    const nomeArquivo = limparNome(page.title) + ".md";
    const caminhoCompleto = `${pastaPath}/${nomeArquivo}`;

    let markdown = "";
    if (page.body) {
      try {
        markdown = turndownService.turndown(page.body);
      } catch (e) {
        console.error(`⚠ Erro no turndown na pág ${page.title}, salvando como HTML.`);
        markdown = page.body; 
      }
    }

    const urlVisual = `https://acsapps.atlassian.net/wiki/spaces/${SPACE_KEY}/pages/${page.id}`;
    const header = `---
title: ${page.title}
url: ${urlVisual}
---

# ${page.title}

`;
    // Escreve com o Header amigável (Frontmatter útil pra IA)
    await fs.writeFile(caminhoCompleto, header + markdown);
  }

  console.log("\n🎉 Extração Finalizada com Organização Perfeita de Pastas!");
}

executar();
