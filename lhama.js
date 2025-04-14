// lhama.js
const fetchLlamaResponse = async (prompt) => {
    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt })
        });
        
        const data = await response.json();
        return data.response || 'Nenhuma resposta recebida.';
    } catch (error) {
        return 'Erro ao comunicar com o servidor.';
    }
};
