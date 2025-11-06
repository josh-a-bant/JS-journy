//callback function
// sum(displayResult, 10, 20);

// function displayResult(result) {
//   document.getElementById("display-result").textContent = result;
// }

// function sum(displayFunction, num1, num2) {
//   let result = num1 + num2;
//   displayFunction(result);
// }

//forEach() method
// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(tripleNumber);
// numbers.forEach(display);

// function display(number) {
//   console.log(number);
// }

// function square(number, index, array) {
//   array[index] = Math.pow(number, 2);
// }

// function cube(number, index, array) {
//   array[index] = Math.pow(number, 3);
// }

// function doubleNumber(number, index, array) {
//   array[index] = number * 2;
// }

// function tripleNumber(number, index, array) {
//   array[index] = number * 3;
// }

// let names = ["jashobanta", "jyoti", "jk"];

// names.forEach(capitalize);
// names.forEach(display);

// function display(name) {
//   let displayNames = document.getElementById("display-names");
//   const h1 = document.createElement("h1");
//   h1.style.color = "blue";
//   h1.style.fontSize = "3em";
//   h1.textContent = name;
//   displayNames.appendChild(h1);
// }

// function capitalize(name, index, array) {
//   array[index] = name.charAt(0).toUpperCase() + name.slice(1);
// }

// filter() methos
const names = [
  { name: "jasho", age: 26 },
  { name: "jyoti", age: 25 },
  { name: "jk", age: 8 },
];

let newNames = names.filter(budha);
newNames.map(displayName);

function displayName(newName) {
  console.log(`Name = ${newName.name}, Age = ${newName.age}`);
}

function budha(name) {
  return name.age >= 18;
}

// notes
// callback function - a function that is passed as an argument to another function.

// forEach method - method used to iterate over the elements of an array and apply a specified function (callback) to each element

// map method - accepts a callback and applies that function to each element of an array, then return a new array

// filter method - creates a new array by filtering out elements with a callback

// reduce method - reduce the elements of an array to a single value
