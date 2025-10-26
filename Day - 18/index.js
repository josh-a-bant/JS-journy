const users = [
  { firstName: "John", lastName: "Doe", age: 25 },
  { firstName: "Jane", lastName: "Smith", age: 30 },
  { firstName: "Alice", lastName: "Johnson", age: 28 },
  { firstName: "Bob", lastName: "Brown", age: 25 },
];

const output = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] += 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
// console.log(output);

const firstNames = users
  .filter((users) => users.age < 30)
  .map((user) => user.firstName);
// console.log(firstNames);

const firstNamesUsingReduce = users.reduce((acc, curr) => {
  if (curr.age < 30) acc.push(curr.firstName);
  return acc;
}, []);
console.log(firstNamesUsingReduce);
