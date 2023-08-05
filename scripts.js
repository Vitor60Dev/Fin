const typingText = document.getElementById("typing-text");
const footerText = document.getElementById("footer-text");
const compliments = [
  "😊 Você é simplesmente deslumbrante! 😊",
  "🌼 Sua beleza ilumina qualquer ambiente! 🌼",
  "🌟 Seus olhos são como estrelas brilhantes! 🌟",
  "🌺 Seu sorriso é contagiante e encantador! 🌺",
  "💖 Você é maravilhosa, por dentro e por fora! 💖",
  "🦋 Sua beleza é tão única quanto uma borboleta! 🦋",
  "🌹 Você é uma rosa em um jardim de emoções! 🌹",
  "🌈 Sua presença traz mais cores para o mundo! 🌈",
  "🌸 Seu encanto é comparável à beleza das flores! 🌸",
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
