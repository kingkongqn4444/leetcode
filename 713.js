/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k === 0) {
    return 0;
  } else {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      let product = 1;
      for (let j = i; j < nums.length; j++) {
        product *= nums[j];
        if (product < k) {
          count++;
        } else {
          break;
        }
      }
    }
    return count;
  }
};

console.log(
  "================",
  numSubarrayProductLessThanK([10, 5, 2, 6], 100)
);
