// Get reference to the display element
let display = document.getElementById('display');
// Initialize memory storage variable
let memory = 0;

// Function to clear the display
function clearDisplay() {
    display.innerText = '';
}


// Function to append a character to the display
function appendCharacter(character) {
    // Prevent duplicate appending by adding a condition
    if (display.innerText.slice(-1) === character && isNaN(character)) {
        return; // Do not append if the last character is the same operator
    }
    display.innerText += character;
}







// Function to remove the last character from the display
function backspace() {
    display.innerText = display.innerText.slice(0, -1);
}

// Function to evaluate the expression and display the result
function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}

// Function to calculate the square root of the current value
function calculateSquareRoot() {
    try {
        display.innerText = Math.sqrt(eval(display.innerText));
    } catch (error) {
        display.innerText = 'Error';
    }
}

// Function to calculate the percentage of the current value
function calculatePercentage() {
    try {
        display.innerText = eval(display.innerText) / 100;
    } catch (error) {
        display.innerText = 'Error';
    }
}

// Memory function: Clear the stored memory value
function memoryClear() {
    memory = 0;
    display.innerText = '';
}

// Memory function: Recall the stored memory value and append it to the display
function memoryRecall() {
    display.innerText += memory;
}

// Memory function: Add the current value to the stored memory
function memoryAdd() {
    try {
        memory += eval(display.innerText);
        display.innerText = '';
    } catch (error) {
        display.innerText = 'Error';
    }
}

// Memory function: Subtract the current value from the stored memory
function memorySubtract() {
    try {
        memory -= eval(display.innerText);
        display.innerText = '';
    } catch (error) {
        display.innerText = 'Error';
    }
}







