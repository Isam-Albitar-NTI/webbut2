let clicked = 0;
let inventory = [];


const clickerButton = document.querySelector(".clicker");
const textField = document.querySelector(".clickcount");


const doubleButton = document.querySelector('.double');
const tripleButton = document.querySelector('.triple');
const burstButton = document.querySelector('.burst');
const autoButton = document.querySelector('.auto');
const bonusButton = document.querySelector('.bonus');



clickerButton.addEventListener('click', () => {
    clicked++;
    textField.innerHTML = clicked;
});

doubleButton.addEventListener('click', () => {
    if (clicked >= 20) {
        clicked = clicked - 20;
        textField.innerHTML = clicked;
    }
});

tripleButton.addEventListener('click', () => {
    if (clicked >= 50) {
        clicked = clicked - 50;
        textField.innerHTML = clicked;
    }
});

burstButton.addEventListener('click', () => {
    if (clicked >= 200) {
        clicked = clicked - 200;
        textField.innerHTML = clicked;
    }
});

autoButton.addEventListener('click', () => {
    if (clicked >= 500) {
        clicked = clicked - 500;
        textField.innerHTML = clicked;
    }
});

bonusButton.addEventListener('click', () => {
    if (clicked >= 1000) {
        clicked = clicked - 1000;
        textField.innerHTML = clicked;
    }
});



