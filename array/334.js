/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let check = false;
  for (let i = 0; i < nums.length; i++) {
    let j = i > nums.length - 2 ? 0 : i + 1;
    let k = j + 1;
    if (nums[i] < nums[j] && nums[j] < nums[k]) {
      return true;
    }
  }
  return check;
};

console.log(increasingTriplet([1, 2, 3, 4, 5]));
