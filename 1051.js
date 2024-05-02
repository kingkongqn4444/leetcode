// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation:
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let numberHeight = 0;
  let cloneArr = [...heights];
  cloneArr.sort((a, b) => a - b);
  for (let i = 0; i < heights.length; i++) {
    if (cloneArr[i] !== heights[i]) {
      numberHeight++;
    }
  }
  return numberHeight;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
