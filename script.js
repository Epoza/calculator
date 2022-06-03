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
let equalsPressed = false;
let dot = false


function update(){
    clearScreen();
    updateOperator();
    isEqualsPressed();

    // numbers.forEach(number => {
    //     number.addEventListener('click', (e) => {
    //         if(e.target.innerText === '.' && !dot){
    //             dot = true
    //         } else if (e.target.innerText === '.' && dot){
    //             return
    //         }
    //         currentNum += e.target.innerText;
    //         currentDisplay.innerText = currentNum
    //     })
    // })
    // clear.addEventListener('click', () => {
    //     currentDisplay.innerText = 0
    //     currentNum = '';
    // })
}

update()
function add(a, b){
    firstNum = a + b
    currentDisplay.innerText = firstNum
}

function subtract(a, b){
    firstNum = a - b
    currentDisplay.innerText = firstNum
}

function multiply(a, b){
    firstNum = a * b
    currentDisplay.innerText = firstNum
}


function divide(a, b){
    firstNum = a * b
    currentDisplay.innerText = firstNum
}


function updateOperator() {
    operators.forEach(operator => {
        operator.addEventListener('click', (e) =>{
            clickedOperator = e.target.innerText
            if(clickedOperator){
                currentDisplay.innerText = clickedOperator
            }
        })
    })
}



function operate(getOperator, a, b){
    numbers.forEach(number => {
        number.addEventListener('click', (e) => {
            if(clickedOperator === false){
                firstNum += e.target.innerText;
                currentDisplay.innerText = firstNum;
            } else {
                // e.target.innerText = ''
                secondNum += e.target.innerText
                currentDisplay.innerText = firstNum + getOperator + secondNum
            }
        })
    })

    if(equalsPressed === true){
        switch(getOperator){
            case '+':
                add(a, b);
                break;
            case '-':
                subtract(a, b);
                break;   
            case '*':
                multiply(a, b); 
                break;
            case '/':
                divide(a, b);
                break;
        }
    }
}
operate(clickedOperator, firstNum, secondNum)

function isEqualsPressed(){
    equals.addEventListener('click', () => {
        equalsPressed = true
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
}



