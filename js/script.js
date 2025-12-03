let num1;
let operator;
let num2;

const display = document.querySelector("#display");
const buttons = document.querySelector("#buttons");

buttons.addEventListener("click", function(e)
    {
        display.textContent += e.target.textContent;
        const operators = "+-*/";

        // Store first number in num1
        if ((typeof +e.target.textContent == "number") && !Number.isNaN(+e.target.textContent))
        {
            // TODO: Figure out how to differentiate between first number and second number
            num1 = +e.target.textContent;
            console.log(+e.target.textContent);
        }
        // Store operator in operator
        else if (operators.includes(e.target.textContent))
        {
            // Replace with code to store operator in operator variable
            console.log("I'm an operator");
        }

        // Store second number in num2
        // Call operate() when = button is clicked
    });

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

function add(x, y)
{
    return x + y;
}

function subtract(x, y)
{
    return x - y;
}

function multiply(x, y)
{
    return x * y;
}

function divide(x, y)
{
    return x / y;
}