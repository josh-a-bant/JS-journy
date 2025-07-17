// console.log("runtime error : ", x);

// console.log(x; //compile time error

// try {
//   console.log("inside try block");
//   console.log("before error");
//   console.log(x);
//   console.log("after error");
// } catch (error) {
//   console.log("inside catch block");
// }

// try {
//   console.log("inside try block");
//   console.log("before error");
//   // console.log(x);
//   console.log("after error");
// } catch (error) {
//   console.log("inside catch block");
// } finally {
//   console.log("inside finally block");
// }

try {
  console.log("inside try block");
  console.log("before error");
  console.log(x);
  console.log("after error");
} catch (error) {
  throw new Error("1st declare then print");
}
