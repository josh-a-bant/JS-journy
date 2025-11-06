// const helloJK = function () {
//   console.log("JK");
// };

// helloJK();

// const numbers = [1, 2, 3, 4, 5];

// const cubes = numbers.map(function (number) {
//   return Math.pow(number, 3);
// });

// const square = numbers.map(function (number) {
//   return Math.pow(number, 2);
// });

// console.log(square);
// console.log(cubes);

// function expressions = a way to define functions as values or variables

const hello = (name) => {
  console.log(`Hello ${name}`);
};
hello("JK");

const numbers = [1, 2, 3, 4, 5];
const square = numbers.map((number) => Math.pow(number, 2));
const cubes = numbers.map((number) => Math.pow(number, 3));
const total = numbers.reduce((acc, number) => acc + number);
console.log(square);
console.log(cubes);
console.log(total);

//  arrow functions = a concise way to write function expressions good for simple functions that you use only once
