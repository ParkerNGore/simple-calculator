console.log("Hello, World");
//sudo code

// Grabeach of the elements
// from the 'document'
// and store them in variables

// -left input
// -right input
// -add button
// -subtract button
// -multiply button
// -result

const leftInputElement = document.getElementById("leftInput");
const rightInputElement = document.getElementById("rightInput");
const addButtonElement = document.getElementById("addButton");
const subtractButtonElement = document.getElementById("subtractButton");
const multiplyButtomElement = document.getElementById("multiplyButton");
const divideButtonElement = document.getElementById("divideButton");

const resultElement = document.getElementById("result");

// add event listeners to each
// math operator buttons

addButtonElement.addEventListener("click", function () {
  add();
  // grab left input value
  const leftValue = Number(leftInputElement.value);

  //grab right input value
  const rightValue = Number(rightInputElement.value);

  // add the two -> call our add() with the two values
  const result = add(leftValue, rightValue);

  //set the result into the <span>
  resultElement.innerText = result;
});
subtractButtonElement.addEventListener("click", function () {
  subtract();
  const leftValue = Number(leftInputElement.value);
  const rightValue = Number(rightInputElement.value);
  const result = subtract(leftValue, rightValue);

  resultElement.innerText = result;
});
multiplyButtomElement.addEventListener("click", function () {
  multiply();
  const leftValue = Number(leftInputElement.value);
  const rightValue = Number(rightInputElement.value);
  const result = multiply(leftValue, rightValue);

  resultElement.innerText = result;
});
divideButtonElement.addEventListener("click", function () {
  divide();
  const leftValue = Number(leftInputElement.value);
  const rightValue = Number(rightInputElement.value);
  const result = divide(leftValue, rightValue);

  resultElement.innerText = result;
});

// Create 4 functions for each
// math operator

function add(leftValue, rightValue) {
  const result = leftValue + rightValue;

  return result;
}
function subtract(leftValue, rightValue) {
  const result = leftValue - rightValue;

  return result;
}
function multiply(leftValue, rightValue) {
  const result = leftValue * rightValue;

  return result;
}
function divide(leftValue, rightValue) {
  const result = leftValue / rightValue;

  return result;
}
