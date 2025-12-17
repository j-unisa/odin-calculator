# JavaScript Calculator

A simple web-based calculator built with HTML, CSS, and JavaScript.  
Supports basic arithmetic operations, keyboard input, and dynamic display updates.

## Features

- **Basic Operations**: Addition, subtraction, multiplication, and division.
- **Keyboard Support**: Use number keys, operators (`+`, `-`, `*`, `/`), Enter for equals, Backspace/Delete for corrections.
- **Responsive Buttons**: Buttons resize with the layout and wrap properly.
- **Display Handling**:
  - Scrolls horizontally when the number is too long.
  - Prevents multiple decimal points and leading zeros.
  - Handles errors like division by zero.
- **Clear & Delete**: 
  - `Clr` clears all inputs.
  - `Del` removes the last entered digit.

## Usage

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Click the buttons or use your keyboard to perform calculations.

## File Structure

```text
project-root/
├─ index.html        # Main HTML file
├─ css/
│  └─ style.css      # Styles for calculator layout and buttons
└─ js/
   └─ script.js      # Calculator logic and event handling
```

## Example

- Enter `2`, press `+`, then `3`, press `=` → display shows `5`.
- Press `Clr` to reset.
- Use keyboard: Press `2`, `*`, `3`, Enter → display shows `6`.

## Notes

- The display is limited to a maximum of 7 visible characters, with horizontal scrolling for longer numbers.
- Calculator operations are accurate up to 15 decimal places using a `decimalFix` function.
- Division by zero returns `"Error"`.

## License

This project is open-source and free to use.
