//callback function
sum(displayResult, 10, 20);

function displayResult(result) {
  document.getElementById("display-result").textContent = result;
}

function sum(displayFunction, num1, num2) {
  let result = num1 + num2;
  displayFunction(result);
}
