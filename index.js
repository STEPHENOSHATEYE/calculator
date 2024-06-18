const buttons = document.querySelectorAll('button');
const displayResult = document.querySelector('.result-display');
const displayOperation = document.querySelector('.operation-display');

let firstNumber = '';
let operator = '';
let secondNumber = '';
let isFilled = false;

buttons.forEach((button) => {
    button.addEventListener('click',(event)=>{
        let keyValue = event.target.className;
        handleKeyPress(keyValue);
        if (keyValue === 'equals'){
            result = operate(secondNumber,firstNumber,operator);
            displayResult.textContent = (result);
        }
        displayOperation.textContent = (`${secondNumber}   ${operator}     ${firstNumber}`);
        
    });
})

function handleKeyPress(keyValue){
    //check if the value of event is a number
    if ((!isNaN(keyValue)||keyValue === '.')){
        firstNumber += keyValue;
    }else if(['+','-','x','/'].includes(keyValue)){
        if (isFilled === false){
            operator += keyValue;
        };
        secondNumber += firstNumber;
        firstNumber = '';
        isFilled = true
    }else{
        
    };
}

function displayInput(value){

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

        case ('*'):
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

