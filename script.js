const keys = document.querySelectorAll('.keys');
const screen = document.querySelector('.screen');
const equButton = document.querySelector('.equalBtn');
const clearButton = document.querySelector('.clearBtn');
const eraseButton = document.querySelector('.eraseBtn');
const divButton = document.querySelector('.division');
const mulButton = document.querySelector('.multiplication');
const subButton = document.querySelector('.subtraction');
const addButton = document.querySelector('.addition');


function add(a, b){
    return Number(a)+Number(b);
}

function subtract(a, b){
    return Number(a)-Number(b);
}

function division(a, b){
    return Number(a)/Number(b);
}

function multiply(a, b){
    return Number(a)*Number(b);
}

function operate(operator, a, b){
    switch(operator){
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return division(a, b);
            break;
    }
}

function writeScreen(){
    keys.forEach((key) => {
        key.addEventListener('click', () => {
            screen.textContent += key.textContent;
        })
    })
}

function eraseScreen(){
    eraseButton.addEventListener('click', () => {
        screen.textContent = screen.textContent.substring(0, screen.textContent.length - 1); 
    })
}

function clearScreen(){
    clearButton.addEventListener('click', () => {
        screen.textContent = '';
    })
}

equButton.addEventListener('click', () => {
    result = operate();
    clearScreen();
    writeScreen();
})

console.log(operate('-', 1, 1));
clearScreen();
writeScreen();
eraseScreen();

//BUGSS//
//1. More than decimal can be written
//2. More than one operator can be written