function x() {
  function closure() {
    for (let i = 1; i <= 5; i++) {
      setTimeout(() => {
        console.log(`after ${i} second: ${i}`);
      }, i * 1000);
    }
  }
  // console.log(closure());
  return closure;
}

x()();
// let fn = x();
// fn();
