// botão de range area
// Vinculando um evento de mudança ao controle deslizante
const rangeInput = document.getElementById('rangeInput');
const selectedValue = document.getElementById('selectedValue');

rangeInput.addEventListener('input', () => {
    selectedValue.textContent = rangeInput.value;
});


// troca mode area
// botão switch area
const switchButton = document.getElementById('switchButton');

// Verifica se o modo atual é dark mode e alterna para o modo oposto
function toggleMode() {
    const body = document.body;
    const textAreaText = document.getElementById('textAreaText');
    body.classList.toggle('dark-mode');
    textAreaText.classList.toggle('dark-mode-input');
}
// Adicione o evento de mudança ao botão switch
switchButton.addEventListener('change', toggleMode);



//animação do texto
function animateWords(wordsArray, index) {
    const textAnimation = document.getElementById('textAnimation');

    if (index < wordsArray.length) {
        const currentWord = wordsArray[index];
        textAnimation.textContent = currentWord;
        index++;
        setTimeout(() => {
            animateWords(wordsArray, index);
        }, 60000/rangeInput.value); // Tempo de espera em milissegundos (aqui é 60000 ms = 60 segundo)
    }else {
        textAnimation.classList.remove('typing'); // Remove a classe para finalizar o efeito
    }
}



// area de tratamento do texto
function startAnimation() {

    const textAreaInput = document.getElementById('textAreaText');
    const inputText = textAreaInput.value.trim();

    if (inputText === "") {
        alert("Insira um texto antes de separar as palavras.");
        return;
    }

    const wordsArray = inputText.split(/\s+/);
    const textAnimation = document.getElementById('textAnimation');
    textAnimation.classList.add('typing'); // Adiciona a classe para o efeito de digitação
    animateWords(wordsArray, 0);
}


//rolar tela
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
  
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth" // A animação suave faz a rolagem ser mais agradável
      });
    }
  }
