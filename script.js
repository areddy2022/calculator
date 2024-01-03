// Need to BUTTON_MAPPINGS multidimensional with two options number or button

const BUTTON_MAPPINGS = {
    AC: "AC",
    flipsign: -1,
    percent: 100,
    divide: "divide",
    num7: 7, //Done
    num8: 8, //Done
    num9: 9, //Done
    multiply: "multiply",
    num4: 4, //Done
    num5: 5, //Done
    num6: 6, //Done
    subtract: "subtract",
    num1: 1, //Done
    num2: 2, //Done
    num3: 3, //Done
    add: "add",
    num0: 0, //Done
    decpoint: ".",
    compute: "compute",
}

const buttons = document.querySelectorAll("button");

let currentButton;
let mappedButton;
let currentNumber = [];
let storedNum;
let currentOp;

resetDisplay();

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
        eventHandler(buttons[i].id);
    })
}

function eventHandler(currentButton) {
    mappedButton = BUTTON_MAPPINGS[currentButton];
    switch (mappedButton) {
        case 1:
            currentNumber = constructNumber(mappedButton);
            display(currentNumber);
            break;
        case 2:
            currentNumber = constructNumber(mappedButton);
            display(currentNumber);
            break;
        case 3:
            currentNumber = constructNumber(mappedButton);
            display(currentNumber);
            break;
        case 4:
            currentNumber = constructNumber(mappedButton);
            display(currentNumber);
            break;
        case 5:
            currentNumber = constructNumber(mappedButton);
            display(currentNumber);
            break;
        case 6:
            currentNumber = constructNumber(mappedButton);
            display(currentNumber);
            break;
        case 7:
            currentNumber = constructNumber(mappedButton);
            display(currentNumber);
            break;
        case 8:
            currentNumber = constructNumber(mappedButton);
            display(currentNumber);
            break;
        case 9:
            currentNumber = constructNumber(mappedButton);
            display(currentNumber);
            break;
        case 0:
            currentNumber = constructNumber(mappedButton);
            display(currentNumber);
            break;
        case "add":
            if (currentOp == undefined || currentOp != "add") {
                storedNum = castToInt(currentNumber);
                currentNumber = [];
                currentOp = "add";
                break;
            }
            else {
                storedNum = add(storedNum, castToInt(currentNumber));
                display(storedNum);
                currentNumber = [];
                break;
            }
        case "subtract":
            if (currentOp == undefined || currentOp != "subtract") {
                storedNum = castToInt(currentNumber);
                currentNumber = [];
                currentOp = "subtract";
                break;
            }
            else {
                storedNum = subtract(storedNum, castToInt(currentNumber));
                display(storedNum);
                currentNumber = [];
                break;
            }
        case "multiply":
            if (currentOp == undefined || currentOp != "multiply") {
                storedNum = castToInt(currentNumber);
                currentNumber = [];
                currentOp = "multiply";
                break;
            }
            else {
                storedNum = multiply(storedNum, castToInt(currentNumber));
                display(storedNum);
                currentNumber = [];
                break;
            }
    }
}

function castToInt(arr) {
    let num = 0;
    for (index in arr) {
        num += arr[arr.length - index - 1] * (10 ** (index));
    }
    return num;
}

function resetDisplay() {
    document.querySelector(".ansbar").textContent = "0";
}

function display(numberOnScreen) {
    let displayNumber;
    if (typeof numberOnScreen != "number") {
        displayNumber = castToInt(numberOnScreen);
    }
    else {
        displayNumber = numberOnScreen;
    }
    document.querySelector(".ansbar").textContent = displayNumber;
}

function constructNumber(nextDigit) {
    currentNumber.push(nextDigit);
    return currentNumber;
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
        return "R U FR?"
    }
    return number1 / number2;
}