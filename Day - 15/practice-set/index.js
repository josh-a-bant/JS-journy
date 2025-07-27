let multiply = (num1, num2) => num1 * num2;

// console.log(multiply(5, 10));

function twice() {
  console.log("hi");
}
function runTwice(twice) {
  console.log("hi");
  let intervalId = setInterval(twice, 1000);
  console.log("hello");
  setTimeout(() => clearInterval(intervalId), 2000);
}

// runTwice(twice);

let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  console.log("test");
  setTimeout(doubleSize, 2000);
});

doubleSize = () => {
  console.log("after 2 sec");
  btn.style.fontSize = "2rem";
  btn.style.height = "200px";
  btn.style.width = "200px";
};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});

// console.log(sum);

let arr = [2, 3, 4, 5];
let newArr = arr.map((num) => num ** 2);

// console.log(newArr);
