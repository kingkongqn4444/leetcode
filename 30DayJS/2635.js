var map = function (arr, fn) {
  return arr.map(fn);
};

const plusone = (n) => {
  return n + 1;
};

const plusI = (n, i) => {
  return n + i;
};

const constant = (n, i) => {
  return 42;
};

console.log(map([1, 2, 3], plusone));
console.log(map([1, 2, 3], plusI));
console.log(map([1, 2, 3], constant));
