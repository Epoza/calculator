var numbers = document.querySelectorAll('.number')
var operators = document.querySelectorAll('.operator')
var historyDisplay = document.getElementById('history')
var currentDisplay = document.getElementById('current')
var clear = document.getElementById('clear')
var del = document.getElementById('delete')
var seven = document.getElementById('7')
var eight = document.getElementById('8')
var nine = document.getElementById('9')
var divideBtn = document.getElementById('divide')
var four = document.getElementById('4')
var five = document.getElementById('5')
var six = document.getElementById('6')
var multiplyBtn = document.getElementById('multiply')
var one = document.getElementById('1')
var two = document.getElementById('2')
var three = document.getElementById('3')
var subtractBtn = document.getElementById('subtract')
var decimal = document.getElementById('decimal')
var zeroBtn = document.getElementById('0')
var equals = document.getElementById('equals')
var addBtn = document.getElementById('add')


let currentNum = '';
let historyNum = '';
let firstNum = '';
let secondNum = '';
let clickedOperator = false;
let hasDecimal = false
let sliceDisplay = '';


function update(){
    clearScreen();
    updateOperator();
    equalsPressed();
    showInput();
    insertDecimal();

}

update()
function reset(){
    currentDisplay.innerText = firstNum
    secondNum = '';
    clickedOperator = false;
}

function updateOperator() {
    operators.forEach(operator => {
        operator.addEventListener('click', (e) =>{
            clickedOperator = clickedOperator === false ? e.target.innerText : clickedOperator
            if(clickedOperator){
                currentDisplay.innerText = clickedOperator
                
            } if(clickedOperator && secondNum != '') {
                secondNum = secondNum === '' ? 0 : secondNum
                historyDisplay.innerText = firstNum + clickedOperator + secondNum
                operate(clickedOperator, firstNum, secondNum)
            }
        })
    })

}



function operate(getOperator, a, b){
    console.log(getOperator)

    a = parseInt(a)
    b = parseInt(b)

    switch(getOperator){
        case '+':
            firstNum = a + b;
            reset();
            break;
        case '-':
            firstNum = a - b;
            reset();
            break;   
        case '*':
            firstNum = a * b;
            reset();
            break;
        case '/':
            firstNum = a / b;
            reset();
            break;
    }
}

function showInput() {
    numbers.forEach(number => {
        number.addEventListener('click', (e) => {
            if(clickedOperator === false){
                firstNum += e.target.innerText;
                currentDisplay.innerText = firstNum;
            } else {
                secondNum += e.target.innerText
                currentDisplay.innerText = firstNum + clickedOperator + secondNum
            }// el if clickedOperator != false &&
        })
    })
}

function insertDecimal() {
    decimal.addEventListener('click', () => {
        firstNum += '.'
    })
    //not done
}


function equalsPressed(){
    equals.addEventListener('click', () => {
        secondNum = secondNum === '' ? 0 : secondNum
        historyDisplay.innerText = firstNum + clickedOperator + secondNum
        operate(clickedOperator, firstNum, secondNum)
    })
}

function deleteLastDigit(){

}

function clearScreen(){
    clear.addEventListener('click', () => {
        currentDisplay.innerText = 0
        firstNum = '';
        secondNum = '';
        currentNum = '';
        equalsPressed = false;
        clickedOperator = false;
    })

    //move to function deletelastdigit
    del.addEventListener('click', () => {
        sliceDisplay = String(currentDisplay.innerText)
        sliceDisplay = sliceDisplay.slice(0, -1);
        currentDisplay.innerText = sliceDisplay
    })
}



