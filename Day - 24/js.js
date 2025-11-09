// function createCounter() {
//   let count = 0;

//   function increment() {
//     count++;
//     console.log(count);
//   }

//   return { increment };
// }

// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// counter.count = 0;

// console.log(counter.count);

// counter.increment();

// closure = A function defined inside of another function, the inner function has access to the variables and scope of the outer function.
// Allow for private variables and state maintenance Used frequently in JS frameworks: React, Vue, Angular

// synchronous  = Executes line by line consecutively in a sequential manner Code that waits for an operation to complete.

// asynchronous = Allows multiple operations to be performed concurrently without waiting. Doesn't block the execution flow and allows the program to continue. (I/O operations, network requests, fetching data) Handled with: Callbacks, Promises, Async/Await

// try {
//   console.lag("JK");
// } catch (error) {
//   console.error(`error will be: ${error.message}`);
// }

// let x = undefinedVariable;
try {
  // Code that might throw an error
  let result = 10 / 0;
  console.log("Result:", result);

  // let undefinedVariable = 5;

  // This line will throw an error
  let x = undefinedVariable;
} catch (error) {
  // This block runs if there's an error
  console.log("Something went wrong:", error.message);
} finally {
  console.log("Program continues...");
}

// Error = An Object that is created to represent a problem that occurs Occur often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error

// catch { } = Catch and handle any thrown Errors from try { }

// finally { } = (optional) Always executes. Used mostly for clean up
//  ex. close files, close connections, release resources
