// https://leetcode.com/problems/move-zeroes/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function (nums) {
//   for (let i = 0; i <= nums.length; i++) {
//     if (nums[i] === 0) {
//       nums.push(0);
//       nums.splice(i, 1);
//     }
//   }
//   return nums;
// };

var moveZeroes = function (nums) {
  for (i = nums.length; i >= 0; i--) {
    if (nums[i] == 0) {
      nums.push(0);
      nums.splice(i, 1);
    }
  }
  return nums;
};

// Một cách giải hay khác

// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function(nums) {
//   let index = 0
//   for (let i = 0; i < nums.length; i++) {
//       if (nums[i] !== 0) {
//           nums[index] = nums[i]
//           index++
//       }
//   }

//   for (let i = index; i < nums.length; i++) {
//       nums[i] = 0
//   }
// };

console.log("=================asd===111======", moveZeroes([0, 0, 1]));
