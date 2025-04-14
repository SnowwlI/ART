from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    # Aqui você coloca o código para processar os dados
    return 'Resultado do processamento'

if __name__ == "__main__":
    app.run(debug=True)
