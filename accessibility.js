let fontSize = 16; // Tamanho base do texto
let highContrast = false; // Estado inicial do contraste

// Aumentar o tamanho da fonte
function increaseFontSize() {
    fontSize += 1;
    document.documentElement.style.fontSize = fontSize + "px";
}

// Diminuir o tamanho da fonte
function decreaseFontSize() {
    if (fontSize > 12) {
        fontSize -= 1;
        document.documentElement.style.fontSize = fontSize + "px";
    }
}

// Alternar para modo alto contraste
function toggleContrast() {
    highContrast = !highContrast;
    if (highContrast) {
        document.body.classList.add("high-contrast"); // Adiciona a classe ao body
    } else {
        document.body.classList.remove("high-contrast"); // Remove a classe do body
    }
}

// Função para ler texto em voz alta
let utterance; // Variável global para o objeto de leitura

function readText(elementId) {
    const text = document.getElementById(elementId).innerText; // Obtém o texto do elemento
    utterance = new SpeechSynthesisUtterance(text); // Cria a mensagem de áudio
    utterance.lang = 'pt-BR'; // Define o idioma como português
    utterance.rate = 1; // Velocidade da fala (1 é padrão)
    utterance.pitch = 1; // Tom da voz (1 é padrão)
    speechSynthesis.speak(utterance); // Executa a leitura
}

// Função para pausar a leitura
function pauseText() {
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
        speechSynthesis.pause(); // Pausa a leitura
    } else if (speechSynthesis.paused) {
        speechSynthesis.resume(); // Retoma a leitura
    }
}
