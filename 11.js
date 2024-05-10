/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left <= right) {
    max = Math.max(
      max,
      Math.min(height[left], height[right]) * (right - left) || 0
    );
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return max;
};

console.log(maxArea([0, 2]));
