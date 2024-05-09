/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  let max = -1;
  let arraySort = nums.sort((a, b) => b - a);
  for (let i = 0; i < arraySort.length; i++) {
    if (arraySort[i] > max && arraySort.includes(-arraySort[i])) {
      max = arraySort[i];
    }
  }
  return max;
};
// Time : O(n2)

var findMaxK2 = function (nums) {
  let setArray = new Set();
  let max = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      setArray.add(nums[i]);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max && setArray.has(-nums[i])) {
      max = nums[i];
    }
  }
  return max;
};

// Time : O(n)

console.log(findMaxK2([-7, 8, 6, 7, -2, -3]));
