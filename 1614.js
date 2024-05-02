/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let count = 0;
  let maxCount = 0;
  for (const i of s) {
    if (i === "(") {
      count++;
    } else if (i === ")") {
      maxCount = Math.max(count, maxCount);
      count--;
    }
  }
  return maxCount;
};

console.log("==================asd=", maxDepth("(1+(2*3)+((8)/4))+1"));
