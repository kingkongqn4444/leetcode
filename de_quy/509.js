/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(6));
