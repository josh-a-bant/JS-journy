// const helloJK = function () {
//   console.log("JK");
// };

// helloJK();

const numbers = [1, 2, 3, 4, 5];

const cubes = numbers.map(function (number) {
  return Math.pow(number, 3);
});

const square = numbers.map(function (number) {
  return Math.pow(number, 2);
});

console.log(square);
console.log(cubes);
