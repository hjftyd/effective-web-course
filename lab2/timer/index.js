let secInput = document.getElementById('input-sec');
let minInput = document.getElementById('input-min');
let inputs = [secInput, minInput];
let btnStart = document.getElementById('button-start');
let btnStop = document.getElementById('button-stop');
let btnReset = document.getElementById('button-reset');
let root = document.getElementsByTagName('body')[0];
let audio = new Audio('./audio/1.mp3');
let sec;
let min;
let totalTimeSec;
let interval;
let backgroundFlashing;
let alarm;

let States = { RUNNING: 'running', PAUSED: 'paused', INACTIVE: 'inactive' };
let state = Object.values(States).includes(localStorage.getItem('state'))
  ? localStorage.getItem('state')
  : States.INACTIVE;
minInput.value = localStorage.getItem('min') || '0';
secInput.value = localStorage.getItem('sec') || '00';
minInput.oninput = () => {
  minInput.value = parseInt(minInput.value) || '0';
};

secInput.oninput = () => {
  secInput.value = parseInt(secInput.value) || '00';
  if (parseInt(secInput.value) > 59) {
    secInput.value = 59;
  }
  if (secInput.value < 10 && secInput.value >= 0) {
    secInput.value = '0' + parseInt(secInput.value) || '00';
  }
};

let changeState = (state) => {
  switch (state) {
    case States.RUNNING:
      localStorage.state = States.RUNNING;
      clearInterval(interval);
      inputs.forEach((input) => (input.style.opacity = 1));
      sec = parseInt(secInput.value);
      min = parseInt(minInput.value);
      totalTimeSec = sec + min * 60;
      interval = setInterval(() => {
        totalTimeSec = totalTimeSec - 1;
        sec = totalTimeSec % 60;
        min = (totalTimeSec - sec) / 60;
        secInput.value = sec >= 0 ? (sec >= 10 ? sec : '0' + sec) : '00';
        minInput.value = min;
        localStorage.min = min;
        localStorage.sec = sec;
        if (totalTimeSec <= 0) {
          clearInterval(interval);
          btnStop.disabled = true;
          let isBackgroundRed = false;
          let backgrounds = ['', 'rgb(255, 55, 55)'];
          backgroundFlashing = setInterval(() => {
            root.style.background = backgrounds[+!isBackgroundRed];
            isBackgroundRed = !isBackgroundRed;
          }, 500);
          alarm = setInterval(() => audio.play(), audio.duration);
        }
      }, 1000);

      btnStart.disabled = true;
      btnStop.disabled = false;
      inputs.forEach((input) => (input.disabled = true));
      break;
    case States.PAUSED:
      localStorage.state = States.PAUSED;
      btnStart.disabled = false;
      btnStop.disabled = true;
      clearInterval(interval);
      break;
    default:
      localStorage.state = States.INACTIVE;
      clearInterval(interval);
      clearInterval(backgroundFlashing);
      clearInterval(alarm);
      root.style.background = '';
      audio.pause();
      sec = 0;
      min = 0;
      secInput.value = '00';
      minInput.value = '0';
      btnStart.disabled = false;
      btnStop.disabled = true;
      inputs.forEach((input) => {
        input.style.opacity = 1;
        input.disabled = false;
      });
      break;
  }
};

btnStart.onclick = () => changeState(States.RUNNING);
btnStop.onclick = () => changeState(States.PAUSED);
btnReset.onclick = () => changeState(States.INACTIVE);
