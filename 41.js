/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  if (!nums.includes(1)) {
    return 1;
  }
  let arr = nums.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i + 1] - arr[i] > 1) {
      return arr[i] + 1;
    }
  }
  return arr[arr.length - 1] + 1;
};

console.log(
  "===================",
  firstMissingPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 20])
);
