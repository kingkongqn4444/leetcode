var createCounter = function (init) {
  let temp = init;
  return {
    increment: () => {
      return ++init;
    },
    reset: () => {
      init = temp;
      return init;
    },
    decrement: () => {
      return --init;
    },
  };
};

const aa = createCounter(5);

console.log(aa.increment());
console.log(aa.reset());
console.log(aa.decrement());
