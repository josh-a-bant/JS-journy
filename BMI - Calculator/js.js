let height = parseFloat(prompt("enter your height(meter)"));
let weight = parseInt(prompt("enter your weight(kg)"));
let gender = prompt("enter your gender");
let bmiCatagory;

let bmi = weight / height ** 2;

if (bmi < 18.5) {
  bmiCatagory = "underweight";
} else if (bmi >= 18.5 && bmi < 25) {
  bmiCatagory = "healthy";
} else if (bmi >= 25 && bmi < 30) {
  bmiCatagory = "overweight";
} else {
  bmiCatagory = "obese";
}

let message =
  gender === "m"
    ? `hey bro you are ${bmiCatagory}`
    : `hey sis you are ${bmiCatagory}`;

console.log(message);
