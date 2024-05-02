/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let setList = new Set(nums);
  let list = [];
  for (let i = 0; i < nums.length; i++) {
    if (setList.has(nums[i])) {
      setList.delete(nums[i]);
    } else {
      list.push(nums[i]);
    }
  }
  return list;
};

console.log(
  "=================asd===========",
  findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])
);
