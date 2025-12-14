let num1 = "";
let operator;
let num2 = "";

const display = document.querySelector("#display");
const buttons = document.querySelector("#buttons");

// TODO: Add click event handler
buttons.addEventListener("click", eventhandler);

// TODO: Add keydown event handler

// TODO: Figure out logic for when num1 input is entered
// then the Delete button is pressed after display of num1 is fully deleted
function eventhandler(e)
{
    const operators = "+-*/";
    const numbers = "0123456789.";

    // TODO: Add keyboard support
    // TODO: Add TDD

    // For = button
    if (e.target.textContent == "=")
    {
        if ((num1 === "") || (num2 === ""))
        {
            return;
        }
        else
        {
            num2 = Number(num2);
            display.textContent = operate(num1, operator, num2);

            // Clear everything for next calculation
            num1 = "";
            num2 = "";
            operator = "=";

        }
    }
    // For +-*/ buttons
    else if (operators.includes(e.target.textContent))
    {
        // If operator button is clicked after second number
        if (typeof num1 == "number")
        {
            num2 = Number(num2);
            display.textContent = operate(num1, operator, num2)
            num1 = Number(display.textContent);
            num2 = "";
        }

        // Store operator in operator variable
        operator = e.target.textContent;

        // Prevent conversion of empty string to 0
        if (num1 === "")
        {
            return;
        }
        // Convert num1 to Number
        else
        {
            num1 = Number(num1);
        }
    }
    // For clear button
    else if (e.target.textContent == "Clr")
    {
        display.textContent = ""
        num1 = "";
        num2 = "";
        operator = "=";
    }
    // For delete button
    else if (e.target.textContent == "Del")
    {
        display.textContent = display.textContent.slice(0, -1);

        // For num2
        if (num2 != "")
        {
            num2 = num2.slice(0, -1);
        }
        // Delete is pressed after fully deleting num2
        else if ((num1 != "") && (operators.includes(operator)) && (num2 == "") && (display.textContent == ""))
        {
            return;
        }
        // For num1
        else
        {
            num1 = num1.toString().slice(0, -1);
        }
    }
    // For leading zeros
    else if ((display.textContent == "0") && (e.target.textContent == "0"))
    {
        return;
    }
    // For second number
    else if ((typeof num1 == "number") && numbers.includes(e.target.textContent))
    {
        // If the second number already contains input 
        if ((num2) && display.textContent.length < 7)
        {
            // Disable multiple decimal points
            if ((num2.includes(".")) && (e.target.textContent == "."))
            {
                return;
            }
            // For leading zero
            else if ((display.textContent == "0") && numbers.includes(e.target.textContent))
            {
                if (e.target.textContent == ".")
                {
                    display.textContent = "0.";
                }
                else
                {
                    display.textContent = e.target.textContent;
                }
                num2 += e.target.textContent;
            }
            else
            {
                display.textContent += e.target.textContent;
                num2 += e.target.textContent;
            }
        }
        // If the second number contains no input
        else if (num2 === "")
        {
            // First input is a decimal point
            if (e.target.textContent == ".")
            {
                display.textContent = "0.";
            }
            else
            {
                display.textContent = e.target.textContent;
            }
            num2 += e.target.textContent;
        }
    }
    // For first number
    else if (numbers.includes(e.target.textContent))
    {
        // Previous calculation is complete
        if (operator == "=")
        {
            display.textContent = "";
            operator = "";
        }
        
        if (display.textContent.length < 7)
        {
            // Disable multiple decimal points
            if ((num1.includes(".")) && (e.target.textContent == "."))
            {
                return;
            }
            // First input is a decimal point
            else if ((e.target.textContent == ".") && (num1 === ""))
            {
                display.textContent = "0."
            }
            // For leading zero
            else if ((num1 == "0") && numbers.includes(e.target.textContent))
            {
                if (e.target.textContent == ".")
                {
                    display.textContent = "0.";
                }
                else
                {
                    display.textContent = e.target.textContent;
                }
            }
            // TODO: Maybe reposition this to else since this might be for normal instances
            else if (num1)
            {
                display.textContent += e.target.textContent;
            }
            // For the start of the next calculation
            else if ((num1 === ""))
            {
                display.textContent = e.target.textContent;
            }
            num1 += e.target.textContent;
        }        
    }
}

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
    return decimalFix(x + y);
}

function subtract(x, y)
{
    return decimalFix(x - y);
}

function multiply(x, y)
{
    return decimalFix(x * y);
}

function divide(x, y)
{
    if (y == 0)
    {
        return "Error"
    }
    return decimalFix(x / y);
}

function decimalFix(num) 
{
  return Number(num.toFixed(15));
}
