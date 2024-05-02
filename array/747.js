/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let max = nums[0];
  let resutl = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      resutl = i;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (i === resutl) {
      continue;
    }
    if (max / 2 < nums[i]) {
      return -1;
    }
  }
  return resutl;
};

console.log(dominantIndex([3, 6, 1, 0]));
