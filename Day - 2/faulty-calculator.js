/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

let number1 = 10;
let number2 = 10;

const randomNumber = Math.random();
console.log(randomNumber);

if (randomNumber < 0.2) {
  console.log("sum of the number: " + minus(number1, number2));
  console.log("minus of the number: " + devide(number1, number2));
  console.log("multiplication of the number: " + sum(number1, number2));
  console.log("devide of the number: " + exponentiation(number1, number2));
} else {
  console.log("sum of the number: " + sum(number1, number2));
  console.log("minus of the number: " + minus(number1, number2));
  console.log(
    "multiplication of the number: " + multiplication(number1, number2)
  );
  console.log("devide of the number: " + devide(number1, number2));
}

function sum(number1, number2) {
  return number1 + number2;
}

function minus(number1, number2) {
  return number1 - number2;
}

function multiplication(number1, number2) {
  return number1 * number2;
}

function devide(number1, number2) {
  return number1 / number2;
}

function exponentiation(number1, number2) {
  return number1 ** number2;
}
