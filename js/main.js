const displayDOM = document.getElementById('displayNumber');

const btnPlusDOM = document.getElementsByClassName('plus')[0];
const btnMinusDOM = document.getElementsByClassName('minus')[0];
const btnPwrOfTwoDOM = document.getElementsByClassName('double')[0];
const btnDivideByTwoDOM = document.getElementsByClassName('half')[0];
const btnSqrtDOM = document.getElementsByClassName('square')[0];
const btnResetDOM = document.getElementsByClassName('reset')[0];
const btnSwitchDOM = document.getElementsByClassName('switch')[0];
const btnPercentDOM = document.getElementsByClassName('percent')[0];
const btnAll = document.querySelectorAll('button');
let number = 0;
displayDOM.textContent = number;

function prevention() {
    for (let i = 0; i < btnAll.length; i++) {
        if (number === Infinity || number === -Infinity || number === null || number === NaN || number === undefined) {
            return number = 0;
        }
    }
}

function percentage() {
    number = number / 100;
    displayDOM.textContent = number
}

function switcher() {
    number = number * (-1);
    displayDOM.textContent = number
}

function plusOne() {
    if(!isFinite(number)){
    return number = 0;
    }
    displayDOM.textContent = ++number
}
function minusOne() {
    if(!isFinite(number)){
        return number = 0;
        }
    displayDOM.textContent = --number
}
function pwrOfTwo() {
    if(!isFinite(number)){
        return Error
        }
    number = Math.pow(number, 2)
    displayDOM.textContent = number;
}
function divideByTwo() {
    if(!isFinite(number)){
        return number = 0;
        }
    number = number / 2
    displayDOM.textContent = number;
}
function sqrt() {
    if(!isFinite(number)){
        return number = 0;
        displayDOM.textContent = 0;
        }
    number = Math.sqrt(displayDOM.textContent)
    displayDOM.textContent = number;
}
function reset() {
    number = 0
    displayDOM.textContent = number;
}

btnPlusDOM.addEventListener('click', plusOne);
btnMinusDOM.addEventListener('click', minusOne);
btnPwrOfTwoDOM.addEventListener('click', pwrOfTwo);
btnDivideByTwoDOM.addEventListener('click', divideByTwo);
btnSqrtDOM.addEventListener('click', sqrt);
btnResetDOM.addEventListener('click', reset);
btnSwitchDOM.addEventListener('click', switcher);
btnPercentDOM.addEventListener('click', percentage);

