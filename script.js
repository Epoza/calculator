var numbers = document.querySelectorAll('.number')

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
let dot = false


function main(){


    numbers.forEach(number => {
        number.addEventListener('click', (e) => {
            if(e.target.innerText === '.' && !dot){
                dot = true
            } else if (e.target.innerText === '.' && dot){
                return
            }
            currentNum += e.target.innerText;
            currentDisplay.innerText = currentNum
        })
    })
    clear.addEventListener('click', () => {
        currentDisplay.innerText = 0
        currentNum = '';
    })
}

main()
function add(a, b){
    console.log(a + b)
}

add(3, 5)

function subtract(a, b){
    console.log(a - b)
}

subtract(8, 9)

function multiply(a, b){
    console.log(a * b)
}

multiply(9, 6)

function divide(a, b){
    console.log(a / b)
}

divide(10, 2)

function operate(operator, a, b){
    switch(operator){
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

operate('+', 5, 6)

