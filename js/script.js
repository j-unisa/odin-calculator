let num1 = "";
let operator;
let num2 = "";

const display = document.querySelector("#display");
const buttons = document.querySelector("#buttons");

buttons.addEventListener("click", (e) => 
    {
        eventHandler(e.target.textContent);
        document.activeElement.blur();
    });

document.addEventListener("keydown", (e) => 
    {
        eventHandler(e.key);
    });

function eventHandler(value)
{
    const operators = "+-*/";
    const numbers = "0123456789.";

    /* =======================
       Equals / Enter
    ======================= */
    if ((value == "=") || (value == "Enter"))
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

    /* =======================
       Operators (+ - * /)
    ======================= */
    else if (operators.includes(value))
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
        operator = value;

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

    /* =======================
       Clear
    ======================= */
    else if (value == "Clr")
    {
        display.textContent = ""
        num1 = "";
        num2 = "";
        operator = "=";
    }

    /* =======================
       Delete / Backspace
    ======================= */
    else if ((value == "Del") || (value == "Backspace"))
    {
        // For num2
        if (num2 != "")
        {
            num2 = num2.slice(0, -1);
        }
        // After num1 is entered and operator is selected
        else if ( (num1 != "") && (num2 == "") && (operators.includes(operator)) && (display.textContent != ""))
        {
            num1 = num1.toString().slice(0, -1);
        }
        // Delete is pressed after fully deleting num2
        else if ((typeof num1 == "number") && (num1 != "") && (num2 == "") && (operators.includes(operator)) && (display.textContent == ""))
        {
            return;
        }
        // After operator is selected and num1 is fully deleted, Delete button is pressed again
        else if ((typeof num1 == "string") && (num1 == "") && (num2 == "") && (operators.includes(operator)) && (display.textContent == ""))
        {
            return;
        }
        // For num1
        else
        {
            num1 = num1.toString().slice(0, -1);
        }
        display.textContent = display.textContent.slice(0, -1);
    }

    /* =======================
       Prevent leading zero
    ======================= */
    else if ((display.textContent == "0") && (value == "0"))
    {
        return;
    }

    /* =======================
       Second number input
    ======================= */
    else if ((typeof num1 == "number") && numbers.includes(value))
    {
        // If the second number already contains input 
        if ((num2) && display.textContent.length < 7)
        {
            // Disable multiple decimal points
            if ((num2.includes(".")) && (value == "."))
            {
                return;
            }
            // For leading zero
            else if ((display.textContent == "0") && numbers.includes(value))
            {
                if (value == ".")
                {
                    display.textContent = "0.";
                }
                else
                {
                    display.textContent = value;
                }
                num2 += value;
            }
            else
            {
                display.textContent += value;
                num2 += value;
            }
        }
        // If the second number contains no input
        else if (num2 === "")
        {
            // First input is a decimal point
            if (value == ".")
            {
                display.textContent = "0.";
            }
            else
            {
                display.textContent = value;
            }
            num2 += value;
        }
    }

    /* =======================
       First number input
    ======================= */
    else if (numbers.includes(value))
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
            if ((num1.includes(".")) && (value == "."))
            {
                return;
            }
            // First input is a decimal point
            else if ((value == ".") && (num1 === ""))
            {
                display.textContent = "0."
            }
            // For leading zero
            else if ((num1 == "0") && numbers.includes(value))
            {
                if (value == ".")
                {
                    display.textContent = "0.";
                }
                else
                {
                    display.textContent = value;
                }
            }
            // For the start of the next calculation
            else if ((num1 === ""))
            {
                display.textContent = value;
            }
            else
            {
                display.textContent += value;
            }
            num1 += value;
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
