const buttons = document.querySelectorAll('button');
const displayResult = document.querySelector('.result-display');

displayResult.textContent = '0';
let firstNumber = '';
let operator = '';
let secondNumber = '';
let isFilled = false;
let shouldDisplayResult = false;
let addDecimal = true;
let result;

buttons.forEach((button) => {
    button.addEventListener('click',(event)=>{
        let keyValue = event.target.className;
        handleKeyPress(keyValue);
        if (keyValue === 'equals' && shouldDisplayResult === true){
            result = operate(secondNumber,firstNumber,operator);
            firstNumber = '';
            console.log(`${secondNumber}  ${firstNumber}  ${operator} and ${result}`)
            displayResult.textContent = (result);
            shouldDisplayResult = false;
        }
    });
})

function handleKeyPress(keyValue){
    //check if the value of event is a number
    if ((!isNaN(keyValue))){
        firstNumber += keyValue;
        displayResult.textContent = firstNumber;
        console.log(`2nd ${secondNumber}  1st ${firstNumber}  op ${operator}`)
    }else if(['+','-','x','/'].includes(keyValue)){
        if (firstNumber === ''){
            secondNumber = result;
            console.log('hi i workd')
        }else{
            displayResult.textContent = '';
            operator = keyValue;
            secondNumber = firstNumber;
            firstNumber = '';
            console.log(`$ 2nd ${secondNumber}  1st ${firstNumber}  po ${operator}`)
        }
        addDecimal = true;
        shouldDisplayResult = true;
    }else if(keyValue === 'clear-all'){
        handleClearAll();
    }else if(keyValue === '.' && addDecimal === true){
        handleDecimal(keyValue);
    }else if(keyValue === 'clear'){
        handleClear();
    }
}

function handleDecimal(keyValue){
    firstNumber += keyValue;
    addDecimal = false;
}

function handleClearAll(){
    displayResult.textContent = '0';
    firstNumber = '';
    operator = '';
    secondNumber = '';
    shouldDisplayResult = false;
    result = null;
}

function handleClear(){
    firstNumber = firstNumber.slice(0,-1);
    displayResult.textContent = firstNumber;
}

function operate(num1,num2,operation){
    let result = 0;

    switch (operation){
        case ('+'):
            result += addNumbers(num1,num2);
        break;
        
        case ('-'):
            result += subtractNumbers(num1,num2);
        break;

        case ('/'):
            result += divideNumbers(num1,num2);
        break;

        case ('x'):
            result += multiplyNumbers(num1,num2);
        break;
    }
    return result;
};


function addNumbers(a,b){
    a = parseFloat(a);    
    b = parseFloat(b);
    return a + b;
}

function subtractNumbers(a,b){
    a = parseFloat(a);
    b = parseFloat(b);
    return a - b;
}

function multiplyNumbers(a,b){
    a = parseFloat(a);
    b = parseFloat(b);
    return a * b;
}

function divideNumbers(a,b){
    a = parseFloat(a);
    b = parseFloat(b);
    return a/b;
}

