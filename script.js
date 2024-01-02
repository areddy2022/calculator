// Need to BUTTON_MAPPINGS multidimensional with two options number or button

const BUTTON_MAPPINGS = {
    AC: "AC",
    flipsign: -1,
    percent: 100,
    divide: "divide",
    num7: 7,
    num8: 8,
    num9: 9,
    multiply: "multiply",
    num4: 4,
    num5: 5,
    num6: 6,
    subtract: "subtract",
    num1: 1,
    num2: 2,
    num3: 3,
    add: "add",
    num0: 0,
    decpoint: ".",
    compute: "compute",
}

const buttons = document.querySelectorAll("button");


let currentButton;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
        eventHandler(buttons[i].id);
    })
}

function eventHandler(currentButton) {
    let mappedButton = BUTTON_MAPPINGS[currentButton];
    alert(mappedButton);
}

function constructNumber() {
    return number;
}

function add(number1, number2) {
    return number1 + number2;
}


function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 == 0) {
        return "RUFR?"
    }
    return number1 / number2;
}