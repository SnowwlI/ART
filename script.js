// script.js
document.getElementById('submitBtn').addEventListener('click', async () => {
    const prompt = document.getElementById('prompt').value;

    const responseElement = document.getElementById('response');
    responseElement.textContent = 'Carregando...';

    const responseText = await fetchLlamaResponse(prompt);
    responseElement.textContent = responseText;
});
