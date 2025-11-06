sum(displayResult, 10, 20);

function displayResult(result) {
  console.log(result);
}

function sum(displayFunction, num1, num2) {
  let result = num1 + num2;
  displayFunction(result);
}
