//Wite a program to print the marks of a student in an object using for loop

const obj = { harry: 98, rohan: 70, akash: 75 };

for (let index = 0; index < Object.keys(obj).length; index++) {
  const element = obj[Object.keys(obj)[index]];
  console.log(element);
}

//Write the program in q1 using for in loop

for (const key in obj) {
  const element = obj[key];
  console.log(element);
}

//Write a function to find mean of 5 numbers

function meanOf5Numbers(num1, num2, num3, num4, num5) {
  const sumOfAllNumbers = num1 + num2 + num3 + num4 + num5;
  return sumOfAllNumbers / 5;
}

console.log("mean of these numbers: " + meanOf5Numbers(10, 20, 30, 40, 50));

for (let i = 1; i <= 6; i++) {
  if (i == 4) break;
  else console.log(i);
}


let herName = "Jyoti";
console.log(herName.substring(2));