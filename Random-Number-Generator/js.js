const btn = document.getElementById("btn");
const num = document.getElementById("num");
let minValue = prompt("enter minimum number");
minValue = Number(minValue);
let maxValue = prompt("enter maximum number");
maxValue = Number(maxValue);
let randomNum;

btn.onclick = function () {
  randomNum = Math.floor(Math.random() * (maxValue - minValue) + 1) + minValue;
  num.textContent = randomNum;
};
