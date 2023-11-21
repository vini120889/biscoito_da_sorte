const phrasesMotiv = [
  "Comece onde você está, use o que você tem e faça o que você pode.",
  "A vida trará coisas boas se tiver paciência.",
  "Não compense na ira o que lhe falta na razão.",
  "Siga os bons e aprenda com eles.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.",
  "Você é do tamanho do seu sonho."
]
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const main = document.querySelector("main")
const btnOpen = document.querySelector("#btnOpen")
const btnNewBiscuit = document.querySelector("#btnNewBiscuit")

//eventos
btnOpen.addEventListener("click", handleOpenClick)
btnNewBiscuit.addEventListener("click", handleNewBiscuitClick)


//Funções
function handleOpenClick(){
  toggleScreen();
  generatePhrase()
  changeHeightMain()

}

function handleNewBiscuitClick(){
  toggleScreen();
  changeHeightMainReturn()
  
}


function toggleScreen(){
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
  
}

function changeHeightMain() {
  const mainElement = document.querySelector('main');
  const screen2Div = document.querySelector('.screen2');

  if (screen2Div && !screen2Div.classList.contains('hide')) {
    if (mainElement) {
      mainElement.style.height = '56.4rem';
    }
  }
}

function changeHeightMainReturn() {
  const mainElement = document.querySelector('main');
  const screen1Div = document.querySelector('.screen1');

  if (screen1Div && !screen1Div.classList.contains('hide')) {
    if (mainElement) {
      mainElement.style.height = '42.8rem';
    }
  }
}

function generatePhrase() {
  const indexRandom = Math.floor(Math.random() * phrasesMotiv.length);
  const phraseRandom = phrasesMotiv[indexRandom];
  document.querySelector('#newPhrase').textContent = phraseRandom;
}

