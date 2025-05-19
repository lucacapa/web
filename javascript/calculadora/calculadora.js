
function appendNumber(number) {
  const display = document.querySelector('.calculator3');
  display.textContent += number;
}

function appendOperator(operator) {
  const display = document.querySelector('.calculator3');
  display.textContent += operator;
}

function deleteOne() {
  const display = document.querySelector('.calculator3');
  display.textContent = display.textContent.slice(0, -1);
}

function clearDisplay() {
  const display = document.querySelector('.calculator3');
  display.textContent = '';
}

function calculate() {
  const display = document.querySelector('.calculator3');
  try {
    display.textContent = eval(display.textContent);
  } catch {
    display.textContent = 'Error';
  }
}