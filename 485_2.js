/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnesWithK = function (nums, k) {
  let count = 0;
  let max = 0;
  let limit = 1;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === 1) {
      count += 1;
      max = Math.max(max, count);
    } else {
      if (limit === k) {
        return count;
      }
      if (nums[i] !== nums[i + 1]) {
        limit++;
      }
      count = 0;
    }
  }
  return max;
};

console.log(
  "=============asd====================",
  findMaxConsecutiveOnesWithK([1, 1, 1, 1, 1], 2)
);
