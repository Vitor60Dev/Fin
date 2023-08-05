const typingText = document.getElementById("typing-text");
const footerText = document.getElementById("footer-text");
const compliments = [
  "😊 Você é simplesmente Perfeita! 😊",
  "🌼 Sua beleza ilumina qualquer lugar! 🌼",
  "🌟 Seus olhos são como estrelas brilhantes! 🌟",
  "🌺 Seu sorriso é contagiante e encantador! 🌺",
  "💖 Você é maravilhosa, por dentro e por fora hehe! 💖",
  "🦋 Sua beleza é tão única quanto uma Aurora! 🦋",
  "🌹 Você é uma rosa em um jardim de emoções! 🌹",
  "🌈 Sua presença traz mais cores que um Arcoires! 🌈",
  "🌸 Seu encanto é comparável à beleza da Ana de Armas! 🌸",
  "🌞 Seu brilho é como o sol em um dia claro! 🌞",
];

function typeText(text, element, index = 0) {
  if (index < text.length) {
    element.textContent = text.slice(0, index + 1);
    setTimeout(() => typeText(text, element, index + 1), 100);
  } else {
    setTimeout(() => deleteText(text, element), 1000);
  }
}

function deleteText(text, element, index = text.length) {
  if (index > 0) {
    element.textContent = text.slice(0, index - 1);
    setTimeout(() => deleteText(text, element, index - 1), 50);
  } else {
    setTimeout(() => typeText(text, element), 500);
  }
}

function showCompliment(number) {
  const complimentElement = document.querySelector(".compliment");
  complimentElement.textContent = compliments[number - 1];
}

// Iniciar as animações da top bar e do rodapé
window.onload = () => {
  typeText("Financeiro Perfeito", typingText);
  typeText("Feito com carinho pelo Vitinho", footerText);
};
