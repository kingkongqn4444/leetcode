// Example 1:

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
// Example 2:

// Input: nums = [0]
// Output: [0]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let array = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      array.unshift(nums[i]);
    } else {
      array.push(nums[i]);
    }
  }
  return array;
};

// Cách giải khác khá hay

// var sortArrayByParity = function(nums) {
//     return nums.sort((a, b) => a % 2 - b % 2 || a - b);
// };

console.log("==============asd==========", sortArrayByParity([3, 1, 2, 4]));
