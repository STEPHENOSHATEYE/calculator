// const num1 = parseInt(prompt('enter a number: '));
// const num2 = parseInt(prompt('enter a number: '));
// const operation = prompt('enter an operation: +, -, /, - ');

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
    a = parseInt(a);    
    b = parseInt(b);
    return a + b;
}

function subtractNumbers(a,b){
    a = parseInt(a);
    b = parseInt(b);
    return a - b;
}

function multiplyNumbers(a,b){
    a = parseInt(a);
    b = parseInt(b);
    return a * b;
}

function divideNumbers(a,b){
    a = parseInt(a);
    b = parseInt(b);
    return a/b;
}


alert(`Your result is ${operate(num1,num2,operation)}`);
