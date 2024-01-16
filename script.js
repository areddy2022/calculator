const BUTTON_MAPPINGS = {
    AC: "AC",
    flipsign: "flipsign", //Done
    percent: "percent", //Done
    divide: "divide", //Done
    num7: 7, //Done
    num8: 8, //Done
    num9: 9, //Done
    multiply: "multiply", //Done
    num4: 4, //Done
    num5: 5, //Done
    num6: 6, //Done
    subtract: "subtract", //Done
    num1: 1, //Done
    num2: 2, //Done
    num3: 3, //Done
    add: "add", //Done
    num0: 0, //Done
    decpoint: ".", //Done
    compute: "compute", //Done
}

const ERROR_MESSAGE = "R U FR?";

const buttons = document.querySelectorAll("button");

let currentButton;
let mappedButton;
let currentNumber = [];
let emptyNumber = [];
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
                storedNum = castToNumber(currentNumber);
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
                storedNum = add(storedNum, castToNumber(currentNumber));
                display(storedNum);
                currentNumber = [];
                break;
            }
        case "subtract":
            if (currentOp == undefined) {
                storedNum = castToNumber(currentNumber);
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
                storedNum = subtract(storedNum, castToNumber(currentNumber));
                display(storedNum);
                currentNumber = [];
                break;
            }
        case "multiply":
            if (currentOp == undefined) {
                storedNum = castToNumber(currentNumber);
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
                storedNum = multiply(storedNum, castToNumber(currentNumber));
                display(storedNum);
                currentNumber = [];
                break;
            }
        case "divide":
            if (currentOp == undefined) {
                storedNum = castToNumber(currentNumber);
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
                storedNum = divide(storedNum, castToNumber(currentNumber));
                display(storedNum);
                currentNumber = [];
                break;
            }
        case "compute":
            if(currentOp != undefined && currentNumber.length != 0 && storedNum != null){
                storedNum = operationDispatcher(currentOp);
                display(storedNum);
                currentNumber = [];
                castToArray(storedNum);
                currentOp = undefined;
            }
            break;
        case "AC":
            storedNum = 0;
            currentNumber = [];
            currentOp = undefined;
            resetDisplay();
            break;
        case "flipsign":
            if(currentNumber.length != 0 && storedNum != null){
                let flippedNumber = -1 * castToNumber(currentNumber);
                currentNumber = [];
                castToArray(flippedNumber);
                display(currentNumber);
            }
            break;
        case "percent":
        if(currentNumber.length != 0 && storedNum != null){
            let percentNumber = 0.01 * castToNumber(currentNumber);
            currentNumber = [];
            castToArray(percentNumber);
            display(currentNumber);
        }
        break;
        case ".":
            if(!(currentNumber.includes("."))){
                currentNumber.push(".");
                display(currentNumber);
            }
            break;
    }
}

function operationDispatcher(operation){
    switch(operation){
        case "add":
            return add(storedNum, castToNumber(currentNumber));
        case "subtract":
            return subtract(storedNum, castToNumber(currentNumber));
        case "multiply":
            return multiply(storedNum, castToNumber(currentNumber));
        case "divide":
            return divide(storedNum, castToNumber(currentNumber));
    }
}

function castToNumber(arr) {
    let num = "";
    for (index in arr) {
        num += arr[index];
    }
    return parseFloat(num);
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
        let num = "";
        for (index in numberOnScreen) {
            num += numberOnScreen[index];
        }
        document.querySelector(".ansbar").textContent = num;
    }
    else {
        document.querySelector(".ansbar").textContent = truncate(numberOnScreen);
    }
}

function truncate(num){
    numString = num.toString();
    let finalNum = "";
    for(let i = 0; i < 15; i++){
        finalNum += numString[i];
    }
    return parseFloat(finalNum);
}

function constructNumber(nextDigit) {
    let stringNum = currentNumber.toString();
    if(stringNum.length < 10){
        currentNumber.push(nextDigit);
    }
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