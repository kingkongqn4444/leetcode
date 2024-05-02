/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let stackOpen = [];
  let stackClose = [];
  let star = [];
  for (let char of s) {
    if (char === "*") {
      star.push("*");
    } else if (char === "(") {
      stackOpen.push("(");
    } else if (char === ")") {
      stackClose.push(")");
    }
  }
  const result = Math.abs(stackOpen.length - stackClose.length);
  console.log(result, stackOpen.length, stackClose.length);
  return star.length >= result;
};

console.log(
  checkValidString(
    "(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"
  )
);
