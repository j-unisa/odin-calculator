let num1;
let operator;
let num2;

function operate(num1, operator, num2)
{
    switch(operator)
    {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
    }
}

// Add
function add(x, y)
{
    return x + y;
}

// Subtract
function subtract(x, y)
{
    return x - y;
}

// Multiply
function multiply(x, y)
{
    return x * y;
}

// Divide
function divide(x, y)
{
    return x / y;
}