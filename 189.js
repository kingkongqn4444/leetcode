/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function (nums, k) {
//   let k2 = k;
//   while (k2 > 0) {
//     const end = nums.pop();
//     nums.unshift(end);
//     k2--;
//   }
//   return nums;
// };

var rotate = function (nums, k) {
  while (nums.length <= k) {
    k = k - nums.length;
  }
  const temp = nums.splice(0, nums.length - k);
  nums.push(...temp);
  return nums;
};

console.log("============", rotate([-1, -100, 3, 99], 2));
