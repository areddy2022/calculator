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

const ERROR_MESSAGE = "R U FR?";

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
            if (currentOp == undefined) {
                storedNum = castToInt(currentNumber);
                currentNumber = [];
                currentOp = "add";
                break;
            }
            else if(currentOp != "add"){
                storedNum = operationDispatcher(currentOp);
                display(storedNum);
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
            else if(currentOp != "subtract"){
                storedNum = operationDispatcher(currentOp);
                display(storedNum);
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
            if (currentOp == undefined) {
                storedNum = castToInt(currentNumber);
                currentNumber = [];
                currentOp = "multiply";
                break;
            }
            else if(currentOp != "multiply"){
                storedNum = operationDispatcher(currentOp);
                display(storedNum);
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
        case "divide":
            if (currentOp == undefined) {
                storedNum = castToInt(currentNumber);
                currentNumber = [];
                currentOp = "divide";
                break;
            }
            else if(currentOp != "divide"){
                storedNum = operationDispatcher(currentOp);
                display(storedNum);
                currentNumber = [];
                currentOp = "divide";
                break;
            }
            else {
                storedNum = divide(storedNum, castToInt(currentNumber));
                display(storedNum);
                currentNumber = [];
                break;
            }
        case "compute":
            if(currentOp != undefined){
                storedNum = operationDispatcher(currentOp);
                display(storedNum);
                currentNumber = [];
                castToArray(storedNum);
                currentOp = undefined;
                break;
            }
    }
}

function operationDispatcher(operation){
    switch(operation){
        case "add":
            return add(storedNum, castToInt(currentNumber));
        case "subtract":
            return subtract(storedNum, castToInt(currentNumber));
        case "multiply":
            return multiply(storedNum, castToInt(currentNumber));
        case "divide":
            return divide(storedNum, castToInt(currentNumber));
    }
}

function castToInt(arr) {
    let num = 0;
    for (index in arr) {
        num += arr[arr.length - index - 1] * (10 ** (index));
    }
    return num;
}

function castToArray(num) {
    let stringNum = num.toString();
    for(index = 0; index < stringNum.length; index++){
        constructNumber(stringNum[index]);
    }
}

function resetDisplay() {
    document.querySelector(".ansbar").textContent = "0";
}

function display(numberOnScreen) {
    if (numberOnScreen == "R U FR?"){
        document.querySelector(".ansbar").textContent = numberOnScreen; 
    }
    else if (typeof numberOnScreen != "number") {
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


function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 == 0) {
        return ERROR_MESSAGE;
    }
    return number1 / number2;
}