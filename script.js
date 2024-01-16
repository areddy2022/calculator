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
    buttons[i].addEventListener("click", () => {
        eventHandler(buttons[i].id);
    })
}

function eventHandler(currentButton) {
    mappedButton = BUTTON_MAPPINGS[currentButton];
    if(typeof mappedButton == "number") {
        currentNumber = constructNumber(mappedButton);
        display(currentNumber);
    }
    switch(mappedButton){
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
            if (currentOp == undefined) {
                storedNum = castToInt(currentNumber);
                currentNumber = [];
                currentOp = "subtract";
                break;
            }
            else {
                storedNum = subtract(storedNum, castToInt(currentNumber), currentOp);
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

function opDispatcher(number1, number2, currentOp){
    switch(currentOp){
        case "add":
            add(number1, number2, currentOp);
        case "subtract":
            subtract(number1, number2, currentOp);
        case "multiply":
            multiply(number1, number2, currentOp);
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
    if (typeof numberOnScreen != "number") {
        document.querySelector(".ansbar").textContent = castToInt(numberOnScreen);
    }
    else {
        document.querySelector(".ansbar").textContent = (numberOnScreen);
    }
}

function constructNumber(nextDigit) {
    currentNumber.push(nextDigit);
    return currentNumber;
}

function add(number1, number2) {
    return number1 + number2;
}


function subtract(number1, number2, currentOp) {
    if (currentOp == undefined) {
        storedNum = castToInt(currentNumber);
        currentNumber = [];
        currentOp = "subtract";
    }
    else if (currentOp != "subtract") {
        opDispatcher(number1, number2, currentOp);
    }
    else {
        storedNum = storedNum - castToInt(currentNumber);
        display(storedNum);
        currentNumber = [];
    }
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