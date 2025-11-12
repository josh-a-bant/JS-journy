// const array = [1, 2, 3];
// console.log(array.length);

const sampleJSON = [
  {
    id: 1,
    name: "Jyoti Besra",
    email: "jb@example.com",
    age: 25,
    city: "Barpali",
    isActive: true,
  },
  {
    id: 2,
    name: "Jashobanta Besra",
    email: "jb@example.com",
    age: 25,
    city: "Padampur",
    isActive: false,
  },
];

const parseToString = JSON.stringify(sampleJSON);
console.log(parseToString);

const sampleString = `[
  {
    "id": 1,
    "name": "Jyoti Besra",
    "email": "jb@example.com",
    "age": 25,
    "city": "Barpali",
    "isActive": true
  },
  {
    "id": 2,
    "name": "Jashobanta Besra",
    "email": "jb@example.com",
    "age": 25,
    "city": "Padampur",
    "isActive": false
  }
]`;

const parseToJson = JSON.parse(sampleString);
console.log(parseToJson);

// JSON = (JavaScript Object Notation) data-interchange format Used for exchanging data between a server and a web application
// JSON files {key:value} OR [value1, value2, value3]

// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object
