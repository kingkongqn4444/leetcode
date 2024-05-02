/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function searchInsert(nums, k) {
  let index = nums.indexOf(k);
  if (index !== -1) {
    return index;
  } else {
    newNums = nums.push(k);
    newNums = nums.sort(function (a, b) {
      return a - b;
    });
    newIndex = newNums.indexOf(k);
    return newIndex;
  }
}

console.log("================", searchInsert([1, 3, 5, 6], 5));
