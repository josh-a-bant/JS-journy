"use strict";

console.log(this);

function x() {
  console.log(this);
}
x();
window.x();

// let obj = {
//   a: 10,
//   y: function () {
//     const x = () => {
//       console.log(this);
//       // console.log(this.a);
//     };

//     x();
//   },

//   z: () => {
//     console.log(this);
//   },
// };

// obj.z();
