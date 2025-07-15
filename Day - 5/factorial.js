// 6! = 6*5*4*3*2*1

// using for loop
let num = 6;
let factorialNum = 1;
for (let i = num; i >= 1; i--) {
  factorialNum = factorialNum * i;
}

console.log(factorialNum);

// using reduce method
let n = [6, 5, 4, 3, 2, 1];
console.log(
  n.reduce((pre, curr) => {
    return (pre = pre * curr);
  })
);
