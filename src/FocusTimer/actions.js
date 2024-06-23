import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countdown()
  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay(0, 0)
  sounds.buttonPressAudio.play()
}

export function set() {
  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus()
}

export function plus() {
  let minutes = state.minutes + 5
  if (minutes > 60) {
    state.minutes = 60
  } else {
    state.minutes += 5
  }
  timer.updateDisplay()
}

export function minus() {
  let minutes = state.minutes - 5
  if (minutes < 0) {
    state.minutes = 0
  } else {
    state.minutes -= 5
  }
  timer.updateDisplay()
}

export function soundForest() {
  const listButtons = el.sounds.querySelectorAll('button')
  if (listButtons[0].classList.contains('active')) {
    checkSoundPlaying()
    sounds.audioFloresta.play()
    return;
  }
  sounds.audioFloresta.pause()
}

export function soundRain() {
  const listButtons = el.sounds.querySelectorAll('button')
  if (listButtons[1].classList.contains('active')) {
    checkSoundPlaying()
    sounds.audioChuva.play()
    return;
  }
  sounds.audioChuva.pause()
}

export function soundCoffeShop() {
  const listButtons = el.sounds.querySelectorAll('button')
  if (listButtons[2].classList.contains('active')) {
    checkSoundPlaying()
    sounds.audioCafeteria.play()
    return;
  }
  sounds.audioCafeteria.pause()
}

export function soundFirePlace() {
  const listButtons = el.sounds.querySelectorAll('button')
  if (listButtons[3].classList.contains('active')) {
    checkSoundPlaying()
    sounds.audioLareira.play()
    return;
  }
  sounds.audioLareira.pause()
}

export function checkSoundPlaying() {
  // Lista de áudios
  const audioList = [
    sounds.audioFloresta,
    sounds.audioChuva,
    sounds.audioCafeteria,
    sounds.audioLareira
  ];

  // Verifica se algum áudio está tocando e o pausa
  audioList.forEach(audio => {
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0; // Reseta o tempo para o início
    }
  });
}
