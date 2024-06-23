import * as FocusTimer from './FocusTimer/index.js'

const sounds = document.querySelector("#sounds");

sounds.addEventListener("click", (event) => {
  if (event.target.tagName === 'BUTTON' || event.target.parentElement.tagName === 'BUTTON') {
    const button = event.target.tagName === 'BUTTON' ? event.target : event.target.parentElement;

    if (event.target.classList.contains('active') || event.target.parentElement.classList.contains('active')) {
      button.classList.toggle('active')
      return
    }

    const buttons = sounds.querySelectorAll('button');
    buttons.forEach(button => button.classList.remove('active'));

    button.classList.toggle('active');
  }
});

//Inicio dos módulos
FocusTimer.start(0, 0)
