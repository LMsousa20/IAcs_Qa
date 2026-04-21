const Database = require("better-sqlite3");
const path = require("path");

const dbPath = path.join(__dirname, "..", "database.db");
const db = new Database(dbPath);

// Inicializa o banco de dados
function initDB() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS sessions (
      id TEXT PRIMARY KEY,
      title TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      session_id TEXT,
      role TEXT,
      content TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (session_id) REFERENCES sessions(id) ON DELETE CASCADE
    );
  `);
}

// Funções de Gerenciamento de Sessão
function createSession(id, title = "Nova Conversa") {
  const stmt = db.prepare("INSERT INTO sessions (id, title) VALUES (?, ?)");
  stmt.run(id, title);
}

function getSessions() {
  return db.prepare("SELECT * FROM sessions ORDER BY created_at DESC").all();
}

function deleteSession(id) {
  db.prepare("DELETE FROM sessions WHERE id = ?").run(id);
}

// Funções de Mensagens
function saveMessage(sessionId, role, content) {
  const stmt = db.prepare("INSERT INTO messages (session_id, role, content) VALUES (?, ?, ?)");
  stmt.run(sessionId, role, content);
}

function getMessages(sessionId) {
  return db.prepare("SELECT * FROM messages WHERE session_id = ? ORDER BY created_at ASC").all(sessionId);
}

initDB();

module.exports = {
  createSession,
  getSessions,
  deleteSession,
  saveMessage,
  getMessages
};
