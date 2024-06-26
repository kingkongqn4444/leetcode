/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

var sortedSquares = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.pow(nums[i], 2);
  }
  return nums.sort((a, b) => a - b);
};

console.log("============asd============", sortedSquares([-4, -1, 0, 3, 10]));
