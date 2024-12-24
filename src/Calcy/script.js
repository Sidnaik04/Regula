document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const numberButtons = document.querySelectorAll('.numbers');
    const operationButtons = document.querySelectorAll('.operations');

    numberButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (input.innerText === "0" || input.innerText === "NaN") {
                input.innerText = ""; // Clear input if it's "0" or "NaN"
            }
            input.innerText += e.target.innerText.trim(); // Append the clicked number
        });
    });

    operationButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const operation = e.target.innerText.trim();
            const currentInput = input.innerText;
            const lastChar = currentInput.slice(-1); // Get the last character

            if (operation === '=') {
                try {
                    // Prevent eval from running invalid expressions
                    if (!isNaN(lastChar)) {
                        input.innerText = eval(currentInput); // Calculate and display the result
                    }
                } catch {
                    input.innerText = "NaN"; // Handle invalid expressions
                }
            } else if (operation === 'AC') {
                input.innerText = "0"; // Reset input to "0"
            } else if (operation === 'DEL') {
                if (currentInput.length > 1) {
                    input.innerText = currentInput.slice(0, -1); // Remove the last character
                } else {
                    input.innerText = "0"; // Set to "0" if input becomes empty
                }
            } else {
                // Handle operators (+, -, *, /, %)
                if (!isNaN(lastChar) || lastChar === "%") {
                    input.innerText += operation; // Append operator if the last character is a number or "%"
                }
            }
        });
    });
});
