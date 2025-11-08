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

console.log(counter.count);
