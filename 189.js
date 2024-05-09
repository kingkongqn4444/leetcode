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

// var rotate = function (nums, k) {
//   while (nums.length <= k) {
//     k = k - nums.length;
//   }
//   const temp = nums.splice(0, nums.length - k);
//   nums.push(...temp);
//   return nums;
// };

var rotate = function (nums, k) {
  // Tạo mảng chứa k phần tử cuối cùng
  const lastKElements = nums.slice(-k);

  // Tạo mảng chứa phần còn lại của mảng gốc
  const remainingElements = nums.slice(0, -k);

  // Kết hợp hai mảng
  const rotatedArray = lastKElements.concat(remainingElements);

  return rotatedArray;
};

console.log("============", rotate([1, 2, 3, 4, 5, 6, 7], 3));
