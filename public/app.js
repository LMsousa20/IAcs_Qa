document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const messagesContainer = document.getElementById('chat-messages');
    const syncBtn = document.getElementById('sync-btn');
    const newChatBtn = document.getElementById('new-chat-btn');
    const sessionsList = document.getElementById('sessions-list');
    const updateOverlay = document.getElementById('update-overlay');
    const docCountEl = document.getElementById('doc-count');
    
    let currentSessionId = null;
    let messageHistory = []; 

    function addMessage(text, role, saveToHistory = true) {
        if (!text) return;
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(role === 'user' ? 'user-message' : 'ai-message');
        messageDiv.textContent = text;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        if (saveToHistory) {
            messageHistory.push({ role, content: text });
            if (messageHistory.length > 6) messageHistory.shift();
        }

        return messageDiv;
    }

    async function loadSessions() {
        try {
            const res = await fetch('/api/sessions');
            const sessions = await res.json();
            sessionsList.innerHTML = '';
            sessions.forEach(session => {
                const item = document.createElement('div');
                item.classList.add('session-item');
                if (session.id === currentSessionId) item.classList.add('active');
                item.textContent = session.title || 'Conversa sem título';
                item.onclick = () => loadConversation(session.id);
                sessionsList.appendChild(item);
            });
        } catch (e) {
            console.error("Erro ao carregar sessões:", e);
        }
    }

    async function loadConversation(sessionId) {
        currentSessionId = sessionId;
        messagesContainer.innerHTML = '';
        messageHistory = [];
        
        try {
            const res = await fetch(`/api/sessions/${sessionId}`);
            const messages = await res.json();
            messages.forEach(m => addMessage(m.content, m.role === 'ai' ? 'ai' : 'user'));
            loadSessions(); // Atualiza o estado visual (ativo)
        } catch (e) {
            console.error("Erro ao carregar conversa:", e);
        }
    }

    function startNewChat() {
        currentSessionId = null;
        messageHistory = [];
        messagesContainer.innerHTML = '';
        const welcome = document.createElement('div');
        welcome.classList.add('message', 'ai-message');
        welcome.textContent = 'Olá! Começamos um novo chat. Como posso te ajudar hoje?';
        messagesContainer.appendChild(welcome);
        loadSessions();
    }

    newChatBtn.addEventListener('click', startNewChat);

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const text = userInput.value.trim();
        if (!text) return;

        addMessage(text, 'user');
        userInput.value = '';

        const loadingMsg = addMessage('Pensando', 'ai-message', false);
        loadingMsg.classList.add('loading-dots');

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    message: text,
                    sessionId: currentSessionId,
                    history: messageHistory.slice(0, -1)
                })
            });

            const data = await response.json();
            loadingMsg.remove();

            if (data.sessionId) {
                const isNew = !currentSessionId;
                currentSessionId = data.sessionId;
                if (isNew) loadSessions();
            }

            if (data.response) {
                addMessage(data.response, 'ai');
            } else {
                addMessage('Ops, algo deu errado.', 'ai');
            }
        } catch (error) {
            loadingMsg.remove();
            addMessage('Erro de conexão.', 'ai');
        }
    });

    syncBtn.addEventListener('click', async () => {
        if (!confirm("Sincronizar agora?")) return;
        updateOverlay.classList.remove('hidden');
        try {
            await fetch('/api/update-docs', { method: 'POST' });
            window.location.reload();
        } catch (error) {
            alert("Erro na sincronização.");
            updateOverlay.classList.add('hidden');
        }
    });

    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            chatForm.dispatchEvent(new Event('submit'));
        }
    });

    // Inicialização
    loadSessions();
});
