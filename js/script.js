let num1 = "";
let operator;
let num2 = "";

const display = document.querySelector("#display");
const buttons = document.querySelector("#buttons");

buttons.addEventListener("click", function(e)
    {
        const operators = "+-*/";
        const numbers = "0123456789.";

        // If button is +-*/
        // then don't display it
        // then stop populating num1
        // and convert it to a Number
        // and start populating num2 if next button is a number
        // If +-*/=
        // then initialize operate()

        // For = button
        if (e.target.textContent == "=")
        {
            if ((!num1) || (!num2))
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

            if (!num1)
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
                else
                {
                    display.textContent += e.target.textContent;
                    num2 += e.target.textContent;
                }
            }
            // If the second number contains no input
            else if (!num2)
            {
                // First input is a decimal point
                if (e.target.textContent == ".")
                {
                    display.textContent = "0."
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
                else if ((e.target.textContent == ".") && !num1)
                {
                    display.textContent = "0."
                }
                else if (num1)
                {
                    display.textContent += e.target.textContent;
                }
                else if ((!num1))
                {
                    display.textContent = e.target.textContent;
                }
                num1 += e.target.textContent;
            }        
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
    if (y == 0)
    {
        return "Error"
    }
    return x / y;
}