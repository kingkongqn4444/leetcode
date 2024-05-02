/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  const index = word.indexOf(ch);
  if (index < 0) {
    return word;
  } else {
    let revertString = "";
    for (let i = index; i >= 0; i--) {
      revertString += word[i];
    }
    return (revertString += word.slice(index + 1, word.length));
  }
};

console.log("========================", reversePrefix("abcdefd", "d"));
