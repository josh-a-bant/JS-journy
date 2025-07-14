let arr = [1, 2, 10, 3, 5, 4];

// let sum = arr.reduce((acc, pre) => {
//   return acc + pre;
// });

// console.log(
//   arr.reduce((acc, pre) => {
//     return acc + pre;
//   })
// );

// arr.push(6);
// console.log("after push", arr);
// arr.pop();
// console.log("after pop", arr);
// arr.shift();
// console.log("after shift", arr);
// arr.unshift(1);
// console.log("after unshift", arr);
// arr.slice(3, 4);
// console.log("after slice", arr);
// arr.splice(0, 1, "jyoti");
// console.log("after splice", arr);

// let total = 0;

// console.log(
//   arr.filter((value) => {
//     return value % 2 != 0;
//   })
// );
arr.sort((num1, num2) => {
  return num1 - num2;
});
console.log(arr);
