//Dados
var timerElement = window.document.getElementById('timer');

var buttonPomodoro = window.document.getElementById('pomodoro');
buttonPomodoro.addEventListener('click', startPomodoro);

var buttonShortBreak = window.document.getElementById('shortBreak');
buttonShortBreak.addEventListener('click', startShortBreak);

var buttonLongBreak = window.document.getElementById('longBreak');
buttonLongBreak.addEventListener('click', startLongBreak);

var pauseButton = window.document.getElementById('pause');
pauseButton.addEventListener('click', pausePlayButton)

var chosenTime = 0;
var time = 0;
var minute = 0;
var second = 0;
var interval
var play = true;
var isTimeStarted = false;

//on click dos botões: 25, 5 ou 10 min
function startPomodoro() {
    stopClock();

    chosenTime = 25;
    time = chosenTime * 60;
    isTimeStarted = true;

    //runTime();
    startClock();
}
function startShortBreak() {
    stopClock();

    chosenTime = 5;
    time = chosenTime * 60;
    isTimeStarted = true;

    startClock();
}
function startLongBreak() {
    stopClock();

    chosenTime = 10;
    time = chosenTime * 60;
    isTimeStarted = true;

    //runTime();
    startClock();
}
//Rodar tempo
function runTime() {
    time = time - 1;

    timerElement.innerHTML = `${addZero(Math.floor(time / 60))}:${addZero(time % 60)}`;
    console.log(time)

    if (time === 0) {
        stopClock();
    }
}
function addZero(n) {
    return n < 10 ? `0${n}` : n;
}

//atualizar a cada segundo
function startClock() {
    interval = setInterval(runTime, 1000);
}
//Parar de rodar
function stopClock() {
    clearInterval(interval);
}
//Pausar timer
function pausePlayButton() {
    if (play == true && isTimeStarted == true) {
        pauseButton.innerText = 'Play'
        stopClock();
        play = false;
    } else {
        if (isTimeStarted == true) {
            pauseButton.innerText = 'Pause'
            startClock();
            play = true;
        }
    }
}