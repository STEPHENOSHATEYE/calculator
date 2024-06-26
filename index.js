const buttons = document.querySelectorAll('button');
const displayResult = document.querySelector('.result-display');

displayResult.textContent = '0'; //initialize display value to 0
//the current number to get any number from user;
let firstNumber = '';
//the operator choosen by user;
let operator = '';
//the previous number to store store the current number number from user;
let secondNumber = '';
//condition to display result;
let shouldDisplayResult = false;
//condition to add decimals
let addDecimal = true;
let result;


//add Event listener to all buttons
buttons.forEach((button) => {
    button.addEventListener('click',(event)=>{
        // store the value of button clicked by user;
        let keyValue = event.target.className;
        // evaluate each button clicked;
        handleKeyPress(keyValue);
        //condition to display result, should only disply result when shouldDisplayResult is true;
        if (keyValue === 'equals' && shouldDisplayResult === true){
            result = operate(secondNumber,firstNumber,operator);
            firstNumber = ''; 
            displayResult.textContent = result.toString();
            shouldDisplayResult = false;
        }
    });
})

function handleKeyPress(keyValue){
    //check if the value of event is a number
    if ((!isNaN(keyValue))){
        firstNumber += keyValue;
        displayResult.textContent = firstNumber;
    }else if(['+','-','x','/'].includes(keyValue)){
        if (firstNumber === ''){
            secondNumber = result;
            ('hi i workd')
        }else{
            displayResult.textContent = '';
            secondNumber = firstNumber;
            firstNumber = '';
        }
        operator = keyValue;
        addDecimal = true;
        shouldDisplayResult = true;
    }else if(keyValue === 'clear-all'){
        handleClearAll();
    }else if(keyValue === '.' && addDecimal === true){
        handleDecimal(keyValue);
    }else if(keyValue === 'clear'){
        handleClear();
    }else if (keyValue === '%'){
        firstNumber = percentage(firstNumber);
        displayResult.textContent = firstNumber;
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
    console.log(firstNumber)
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

function percentage(number){
    number = parseFloat(number);
    percent = number/100;
    return percent;
}