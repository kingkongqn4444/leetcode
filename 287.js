/**
 * @param {number[]} nums
 * @return {number}
 */
// var findDuplicate = function (nums) {
//   let arr = [];
//   let setList = new Set(nums);
//   for (let i = 0; i < nums.length; i++) {
//     if (setList.has(nums[i])) {
//       setList.delete(nums[i]);
//     } else if (!arr.includes(nums[i])) {
//       arr.push(nums[i]);
//     }
//   }
//   return arr;
// };

var findDuplicate = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      console.log("==============asd=========", "vao day");
      return nums[i];
    } else {
      map.set(nums[i], 1);
    }
  }
};

console.log("===============asd=======", findDuplicate([1, 3, 4, 2, 2]));
