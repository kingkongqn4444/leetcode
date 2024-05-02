/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDisappearedNumbers = function (nums) {
//   let arr = [];
//   let set = new Set(nums);
//   for (let i = 1; i <= nums.length; i++) {
//     if (!set.has(i)) {
//       arr.push(i);
//     }
//   }
//   return arr;
// };

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let result = [];

  let n = nums.length;

  for (let i = 0; i < n; i++) {
    const idx = Math.abs(nums[i]) - 1;
    if (nums[idx] > 0) {
      nums[idx] = -nums[idx];
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
};

console.log(
  "==================",
  findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])
);
