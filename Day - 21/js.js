sum(displayResult, 10, 20);

function displayResult(result) {
  let displayResult = document.getElementById("display-result");
  displayResult.textContent = result;
}

function sum(displayFunction, num1, num2) {
  let result = num1 + num2;
  displayFunction(result);
}
