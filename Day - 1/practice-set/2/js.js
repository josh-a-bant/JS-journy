//use logica operatorg to find whether the age of A perion lies betucen 10 and 20,
let age = 21;

if (age >= 10 && age <= 20) {
  console.log("age lies between 10 to 20");
} else {
  console.log("age does not lies between 10 to 20");
}

//Demonstrate the use of swith case statments in Javascript
let switchButton = true;
if (switchButton) {
  console.log("light on");
} else {
  console.log("light off");
}

//Write a JavaScript program to find whether a numtber is Divisible by 2 and 3

let number = 6;

if (number % 2 == 0 && number % 3 == 0) {
  console.log("number divisible by 2 and 3");
} else {
  console.log("number not divisible by 2 and 3");
}

//Write a JavaScift brogran to find whether a pumber is Divislble By either 2 or 3

let num = 11;
if (num % 2 == 0 && num % 3 == 0) {
  console.log("number divisible by both 2 and 3");
} else if (num % 2 == 0) {
  console.log("number divisible by 2 only");
} else if (num % 3 == 0) {
  console.log("number divisible by 3 only");
} else {
  console.log("number not divisible by both 2 and 3");
}

//Print "You Can Drive" or "You cannot Drive" based on agе being greatr than 18 using ternary operator

let checkAge = 16;

checkAge >= 18
  ? console.log("You can drive")
  : console.log("You can not drive");
