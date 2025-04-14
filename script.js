document.getElementById('submitBtn').addEventListener('click', async () => {
    const prompt = document.getElementById('prompt').value;

    const responseElement = document.getElementById('response');
    responseElement.textContent = 'Carregando...';

    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt })
        });

        const data = await response.json();
        responseElement.textContent = data.response || 'Nenhuma resposta recebida.';
    } catch (error) {
        responseElement.textContent = 'Erro ao comunicar com o servidor.';
    }
});
