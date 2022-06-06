var numbers = document.querySelectorAll('.number')
var operators = document.querySelectorAll('.operator')
var historyDisplay = document.getElementById('history')
var currentDisplay = document.getElementById('current')
var clear = document.getElementById('clear')
var del = document.getElementById('delete')
var decimal = document.getElementById('decimal')
var equals = document.getElementById('equals')


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
    deleteLastDigit();
}

function reset(){
    currentDisplay.innerText = firstNum
    secondNum = '';
    clickedOperator = false;
}

function showInput() {
    numbers.forEach(number => {
        number.addEventListener('click', (e) => {
            if(clickedOperator === false){
                insertDecimal();
                firstNum += e.target.innerText;
                currentDisplay.innerText = firstNum;
            } else {
                insertDecimal();
                secondNum += e.target.innerText
                currentDisplay.innerText = firstNum + clickedOperator + secondNum
            }
        })
    })
}

function updateOperator() {
    operators.forEach(operator => {
        operator.addEventListener('click', (e) =>{
            clickedOperator = clickedOperator === false ? e.target.innerText : clickedOperator
            if(clickedOperator){
                hasDecimal = false
                currentDisplay.innerText = firstNum + clickedOperator
            } if(clickedOperator && secondNum != '') {
                secondNum = secondNum === '' ? 0 : secondNum
                historyDisplay.innerText = firstNum + clickedOperator + secondNum
                operate(clickedOperator, firstNum, secondNum)
                clickedOperator = e.target.innerText
                currentDisplay.innerText = firstNum + clickedOperator
            }
            if(clickedOperator && secondNum.includes('.') === false){
                hasDecimal = false
            }
        })
    })
}


function operate(getOperator, a, b){

    a = parseFloat(a)
    b = parseFloat(b)

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

    hasDecimal = firstNum.includes('.') ? true : false
}

function insertDecimal() {
    // checks if first number has decimal after doing operation
    decimal.addEventListener('click', () => {
        if(!clickedOperator && !hasDecimal){
            hasDecimal = true
            firstNum += '.'
            currentDisplay.innerText = firstNum
        }
        if(clickedOperator && !hasDecimal){
            hasDecimal = true
            secondNum += '.'
            currentDisplay.innerText = firstNum + clickedOperator + secondNum
        }
    })
}


function equalsPressed(){
    equals.addEventListener('click', () => {
        if(clickedOperator === '/' && secondNum === '0'){
            historyDisplay.innerText = 'DON\'T YOU DARE DIVIDE BY 0'
        }else if(firstNum && clickedOperator && secondNum) {
            secondNum = secondNum === '' ? 0 : secondNum
            historyDisplay.innerText = firstNum + clickedOperator + secondNum
            operate(clickedOperator, firstNum, secondNum)
        } else{ 
            historyDisplay.innerText = 'Please input a full equation'
        }

    })
}

function deleteLastDigit(){
    del.addEventListener('click', () => {
        if (secondNum != ''){
            let sliceCurrentDislay = String(secondNum)
            secondNum = sliceCurrentDislay.slice(0, -1);
            currentDisplay.innerText = firstNum + clickedOperator + secondNum
        } else if (clickedOperator && secondNum === ''){
            let sliceCurrentDislay = String(clickedOperator)
            clickedOperator = sliceCurrentDislay.slice(0, -1);
            currentDisplay.innerText = firstNum + clickedOperator
            clickedOperator = false
        } else if(firstNum != ''){
            let sliceCurrentDislay = String(firstNum)
            firstNum = sliceCurrentDislay.slice(0, -1);
            currentDisplay.innerText = firstNum
        }
        if(!secondNum.includes('.')){
            hasDecimal = false
        }
        if(secondNum === ''){
            hasDecimal = firstNum.includes('.') ? true : false
        }
        
    })
}

function clearScreen(){
    clear.addEventListener('click', () => {
        currentDisplay.innerText = 0
        historyDisplay.innerText = ''
        firstNum = '';
        secondNum = '';
        currentNum = '';
        equalsPressed = false;
        clickedOperator = false;
        hasDecimal = false
    })
}

update()



