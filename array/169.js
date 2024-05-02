var majorityElement = function (nums) {
  let numsTemp = nums.sort((a, b) => a - b);
  let count = 0;
  let max = 0;
  let result = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (numsTemp[i] === numsTemp[i + 1]) {
      count++;
      if (count > max) {
        result = numsTemp[i];
      }
      max = Math.max(count, max);
    } else {
      count = 0;
    }
  }
  return result;
};

console.log("===================", majorityElement([1]));
