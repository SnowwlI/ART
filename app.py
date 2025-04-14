# app.py
from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/api/generate', methods=['POST'])
def generate():
    data = request.get_json()
    prompt = data.get('prompt')

    # Substitua 'URL_DA_SUA_API_LLaMA' pela URL correta da API LLaMA
    url = 'URL_DA_SUA_API_LLaMA'  
    response = requests.post(url, json={"model": "llama3", "prompt": prompt})

    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({"error": "Erro ao se comunicar com a API LLaMA"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=11434)
