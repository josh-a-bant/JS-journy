// https://pokeapi.co/api/v2/pokemon/pikachu? - API

// async function getPokemonDetail() {
//   const pokemonName = document.getElementById("pokemonName").value;

//   try {
//     const response = await fetch(
//       `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
//     );

//     if (!response.ok) {
//       throw new Error("enter valid name");
//     }

//     const data = await response.json();
//     const pokemonImage = document.getElementById("pokemonImage");

//     const pokemonimg = data.sprites.front_default;

//     pokemonImage.src = pokemonimg;
//     pokemonImage.style.display = "block";
//   } catch (error) {
//     console.error(error);
//   }
// }

// const fruits = ["apple", "banana", "mango"];

// const [firstFruit, secondFruit] = fruits;
// console.log(firstFruit);
// console.log(secondFruit);

// const colors = ["red", "green", "blue", "yellow"];

// const [firstColor, , thirdColor] = colors;
// console.log(firstColor);
// console.log(thirdColor);

// const person = {
//   name: "Jyoti Besra",
//   age: 25,
//   city: "Barpali",
// };

// const { name, city } = person;
// console.log(name);
// console.log(city);

// Renaming and Default Values
// const user = {
//   username: "Jashobanta",
//   country: "India",
// };

// const { username: name, country, age = 25 } = user;
// console.log(name);
// console.log(country);
// console.log(age);

// const employee = {
//   id: 101,
//   info: {
//     fullName: "Jyoti Besra",
//     department: "Frontend",
//     location: {
//       city: "Barpali",
//     },
//   },
// };

// // const { info: fullName, location: city, country = "India" } = employee;
// const {
//   info: {
//     fullName,
//     location: { city, country = "India" },
//   },
// } = employee;
// console.log(fullName);
// console.log(city);
// console.log(country);

const users = [
  {
    id: 1,
    name: "Jyoti Besra",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    name: "Jashobanta Besra",
    skills: ["React", "Tailwind", "Git"],
  },
];

const [firstUser, secondUser] = users;
// console.log(firstUser);
// console.log(secondUser);

const {
  name: firstUserName,
  skills: [firstUserFirstSkill],
} = firstUser;

const {
  name: secondUserName,
  skills: [, , secondUserLastSkill],
} = secondUser;

console.log(firstUserName, "-", firstUserFirstSkill);
console.log(secondUserName, "-", secondUserLastSkill);
