/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function (s) {
  const vow = s.match(/[aeiou]/gi);
  return s.replace(/[aeiou]/gi, (el) => vow.pop());
};

console.log("==================asd=======", reverseVowels("hello"));
