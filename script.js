const numButton = document.querySelectorAll('.numeric');
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
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            division(a, b);
            break;
    }
}

function writeScreen(){
    numButton.forEach((button) => {
        button.addEventListener('click', () => {
            screen.textContent += button.textContent;
        })
    })


}

function eraseScreen(){

}

function clearScreen(){

}
