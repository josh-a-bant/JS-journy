function x() {
  for (var i = 1; i <= 5; i++) {
    function closure(x) {
      setTimeout(function () {
        console.log(`after ${x} second: ${x}`);
      }, x * 1000);
    }
    closure(i);
  }
}
x();
