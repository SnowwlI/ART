// Digitação da primeira transição
const lines = [
  { id: "line1", text: "> Estabelecendo conexão segura..." },
  { id: "line2", text: "> Decodificando firewall..." },
  { id: "line3", text: "> Acesso concedido." }
];

function typeLine(index) {
  if (index >= lines.length) {
    setTimeout(() => showBoot(), 800);
    return;
  }

  const { id, text } = lines[index];
  const el = document.getElementById(id);
  el.style.opacity = 1;
  let i = 0;
  const typing = setInterval(() => {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
      setTimeout(() => typeLine(index + 1), 500);
    }
  }, 50);
}

typeLine(0);

// Segunda transição (boot)
function showBoot() {
  const transition = document.getElementById("transition-screen");
  const boot = document.getElementById("boot-animation");
  const bootLine = document.querySelector(".boot-line");

  transition.style.display = 'none';
  boot.style.opacity = 1;

  anime({
    targets: bootLine,
    width: ['0%', '100%'],
    duration: 1000,
    easing: 'easeInOutExpo',
    complete: () => {
      anime({
        targets: bootLine,
        height: ['2px', '100vh'],
        duration: 800,
        easing: 'easeInOutExpo',
        complete: () => {
          boot.style.display = 'none';
          document.getElementById("main-content").style.display = 'block';
        }
      });
    }
  });
}

// Chat Simples
function sendMessage() {
  const input = document.getElementById("userInput");
  const msg = input.value.trim();
  if (msg === "") return;

  const chat = document.getElementById("chat-box");

  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.textContent = "Você: " + msg;
  chat.appendChild(userMsg);

  const iaMsg = document.createElement("div");
  iaMsg.className = "message ia";
  iaMsg.textContent = "IA: " + getAIResponse(msg);
  setTimeout(() => {
    chat.appendChild(iaMsg);
    chat.scrollTop = chat.scrollHeight;
  }, 500);

  input.value = "";
}

function getAIResponse(input) {
  // Respostas básicas para simular IA
  const respostas = {
    "oi": "Olá, usuário.",
    "quem é você": "Sou um sistema neural experimental.",
    "tudo bem": "Estou funcional. E você?",
  };

  input = input.toLowerCase();
  return respostas[input] || "Processando dados... ainda estou aprendendo.";
}
