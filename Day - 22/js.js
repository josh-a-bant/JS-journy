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

// const hello = (name) => {
//   console.log(`Hello ${name}`);
// };
// hello("JK");

// const numbers = [1, 2, 3, 4, 5];
// const square = numbers.map((number) => Math.pow(number, 2));
// const cubes = numbers.map((number) => Math.pow(number, 3));
// const total = numbers.reduce((acc, number) => acc + number);
// console.log(square);
// console.log(cubes);
// console.log(total);

// arrow functions = a concise way to write function expressions good for simple functions that you use only once

// class MathUtil {
//   static PI = 3.14159265359;

//   static getSquare(number) {
//     return `square of ${number}: ` + number * number;
//   }

//   static getCube(number) {
//     return `cube of ${number}: ` + number * number * number;
//   }
// }

// console.log(`value of PI ${MathUtil.PI}`);
// console.log(MathUtil.getSquare(2));
// console.log(MathUtil.getCube(2));

// class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions ex. static keyword, encapsulation, inheritance

class User {
  static userCount = 0;

  constructor(userName) {
    this.userName = userName;
    User.userCount++;
  }

  sayHello() {
    console.log(`hello ${this.userName}`);
  }

  static getUserCount() {
    console.log(`${this.userCount} peoples are online right now`);
  }
}

const user1 = new User("JK");
user1.sayHello();
const user2 = new User("Jasho");
user2.sayHello();
const user3 = new User("Jyoti");
user3.sayHello();
const user4 = new User("Krishna");
user4.sayHello();

User.getUserCount();

// static = keyword that defines properties or methods that belong to a class itself rather than the objects created from that class (class owns anything static, not the objects)

// inheritance = allows a new class to inherit properties and methods from an existing class. Helps with code reusability

// super = keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass) this = this object super = the parent
