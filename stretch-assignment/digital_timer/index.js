/* Timer */

let msTensElement = document.getElementById('msTens');
let msHundredsElement = document.getElementById('msHundreds');
let secondOnesElement = document.getElementById('secondOnes');
let secondTensElement = document.getElementById('secondTens');

let button = document.getElementById('clickMe');

let msTens = 0;
let msHundreds = 0;
let seconds = 0;


function timer() {

    msTens++;

    if (msTens === 10) {
        msHundreds++;
        msTens = 0;

    }

    if (msHundreds === 10) {
        seconds++;
        msHundreds = 0;
    }

    if (seconds === 10) {
        msHundreds = 0;
        msTens = 0;
        clearInterval(clock);
    }

    msTensElement.innerHTML = msTens;
    msHundredsElement.innerHTML = msHundreds;
    secondOnesElement.innerHTML = seconds;

}


const stop = (event) => { event.stopPropagation() };

button.addEventListener('click', (event) => {
    const clock = setInterval(timer, 10);
    button.disabled = true;
  })

