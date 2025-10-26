var expect = function (val) {
  return {
    toBe: function (subVal) {
      if (val === subVal) {
        return true;
      } else throw new Error("Not Equal");
    },
    notToBe: function (subVal) {
      if (val !== subVal) {
        return true;
      } else throw new Error("Equal");
    },
  };
};

console.log(expect(5).toBe(5));
