function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  return { increment };
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();

counter.count = 0;

console.log(counter.count);

counter.increment();

// closure = A function defined inside of another function, the inner function has access to the variables and scope of the outer function.
// Allow for private variables and state maintenance Used frequently in JS frameworks: React, Vue, Angular

// synchronous  = Executes line by line consecutively in a sequential manner Code that waits for an operation to complete.

// asynchronous = Allows multiple operations to be performed concurrently without waiting. Doesn't block the execution flow and allows the program to continue. (I/O operations, network requests, fetching data) Handled with: Callbacks, Promises, Async/Await
