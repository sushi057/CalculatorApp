const keys = document.querySelectorAll('.keys');
const primButton = document.querySelectorAll('.primary');
const screen = document.querySelector('.screen');
const equButton = document.querySelector('.equalBtn');
const clearButton = document.querySelector('.clearBtn');
const eraseButton = document.querySelector('.eraseBtn');
const divButton = document.querySelector('.division');
const mulButton = document.querySelector('.multiplication');
const subButton = document.querySelector('.subtraction');
const addButton = document.querySelector('.addition');

const operators = ['+', '-', '*', '/'];

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
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return division(a, b);
    }
}

// function writeScreen(){
//     keys.forEach((key) => {
//         key.addEventListener('click', () => {
//             screen.textContent += key.textContent;
//         })
//     })

// }

function writeScreen(evt){
    // screen.textContent += evt.target.textContent;
}

keys.forEach((key) => {
    key.addEventListener('click', writeScreen);
})

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

function evalOperation(){
    screenText = screen.textContent;
    for(sign of operators) {
        index = screenText.indexOf(sign);
        if (index !== -1){
            operandA = Number(screenText.substring(0, index));
            operandB = Number(screenText.substring(index+1, ));
            return operate(sign, operandA, operandB);
        }
    }
}

function avoidTwo(){
    console.log(screenText);
    for(sign of operators){
        if(screenText.indexOf(sign) > -1){
            primButton.forEach((button) => {
                button.addEventListener('click', evalOperation);
            })
        }
    }
}

clearScreen();
eraseScreen();
writeScreen();
evalOperation();
avoidTwo();

// calculator();


//BUGSS//
//1. More than decimal can be written
//2. More than one operator can be writte