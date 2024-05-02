/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const wordTrim = s.trim();

  const wordSlice = wordTrim.split(" ");
  if (wordSlice.length > 0) {
    return wordSlice[wordSlice.length - 1].length;
  }
};

console.log("====================", lengthOfLastWord("Hello World"));
