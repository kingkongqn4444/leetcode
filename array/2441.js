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

console.log(findMaxK([-10, 8, 6, 7, -2, -3]));
