/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let total = 1;
  let arr = [];
  for (let i = 0; i < chars.length; i++) {
    if (total === 1) {
      arr.push(chars[i]);
      total++;
    } else {
      if (chars[i] === chars[i + 1]) {
        total += 1;
      } else {
        arr.push(total.toString());
        total = 1;
      }
    }
  }
  return arr.length;
};

console.log("============", compress(["a", "a", "b", "b", "c", "c", "c"]));
