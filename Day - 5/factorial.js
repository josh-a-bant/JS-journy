// ex : 6! = 6*5*4*3*2*1

// using for loop

let num = 6;
let factorialNum = 1;
for (let i = num; i >= 1; i--) {
  factorialNum = factorialNum * i;
}

console.log(factorialNum);

// using reduce method
let n = 6;
let arr = Array.from(Array(n + 1).keys());
console.log(arr);

console.log(
  arr.slice(1).reduce((pre, curr) => {
    return pre * curr;
  })
);
