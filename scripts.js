const typingText = document.getElementById("typing-text");
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

function typeText(text, index = 0) {
  if (index < text.length) {
    typingText.textContent = text.slice(0, index + 1);
    setTimeout(() => typeText(text, index + 1), 100);
  } else {
    setTimeout(() => deleteText(text), 1000);
  }
}

function deleteText(text, index = text.length) {
  if (index > 0) {
    typingText.textContent = text.slice(0, index - 1);
    setTimeout(() => deleteText(text, index - 1), 50);
  } else {
    setTimeout(() => typeText(text), 500);
  }
}

function showCompliment(number) {
  const complimentElement = document.querySelector(".compliment");
  complimentElement.textContent = compliments[number - 1];
}

// Iniciar a animação da top bar
window.onload = () => {
  typeText("Financeiro Perfeito");
};
