// Calculator functionality
const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('#numberdiv div');
const operationButtons = document.querySelectorAll('#operationdiv div');

let currentInput = '';
let previousInput = '';
let operation = null;
let resetScreen = false;

// Initialize display
display.textContent = '0';

// Add event listeners to number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    appendNumber(button.textContent);
  });
});

// Add event listeners to operation buttons
operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    handleOperation(button.textContent);
  });
});

// Function to append numbers to display
function appendNumber(number) {
  if (resetScreen) {
    display.textContent = '';
    resetScreen = false;
  }
  
  // Prevent multiple zeros at the beginning
  if (display.textContent === '0' && number !== '0') {
    display.textContent = number;
  } else if (display.textContent !== '0') {
    display.textContent += number;
  }
  
  currentInput = display.textContent;
}

// Function to handle operations
function handleOperation(op) {
  // Clear button functionality
  if (op === 'C') {
    clear();
    return;
  }
  
  // If there's no current input, don't do anything (except for clear)
  if (currentInput === '') return;
  
  // If we already have an operation pending, calculate the result first
  if (operation !== null) {
    calculate();
  }
  
  previousInput = currentInput;
  operation = op;
  resetScreen = true;
}

// Function to perform calculation
function calculate() {
  if (previousInput === '' || currentInput === '') return;
  
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  
  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    case '%':
      result = prev % current;
      break;
    default:
      return;
  }
  
  // Update display with result
  display.textContent = result;
  
  // Reset for next operation
  currentInput = result.toString();
  operation = null;
}

// Function to clear calculator
function clear() {
  display.textContent = '0';
  currentInput = '';
  previousInput = '';
  operation = null;
  resetScreen = false;
}
