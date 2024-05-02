/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function (word) {
  let count = 0;
  let objectString = {};
  let arr = new Array(10).fill(0);
  for (let ch of word) {
    objectString[ch] = objectString[ch] + 1 || 1; // Kỹ thuật prefix sum
  }
  console.log(arr);
  return objectString;
};

const test = (word) => {
  let n = word.length;
  for (let i = 0; i < 1 << n; i++) {
    for (let j = 0; j < n; j++) {}
  }
  console.log(5 << 2);
};

console.log(test("aba"));
