// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/submissions/1210059454/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let length = arr.length;
  if (length <= 1) {
    return [-1];
  }
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i + 1 == arr.length) {
      arr[i] = -1;
    }
    for (let j = i + 1; j < arr.length; j++) {
      max = Math.max(arr[j], max);
      arr[i] = max;
    }
    max = 0;
  }
  return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));

// Giải pháp tối ưu
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let greatestIdx = arr.length - 1;

  for (let i = arr.length - 3; i > -1; i--) {
    let nextIdx = i + 1;
    let nextVal = arr[nextIdx];
    let greatestVal = arr[greatestIdx];

    arr[nextIdx] = greatestVal; //overwrite the next index with the greatest value to its right
    arr[greatestIdx] = Math.max(nextVal, greatestVal); //update the greatest value to the right of the current index
  }

  arr[0] = arr[greatestIdx]; //overwrite the first index with the greatest value to its right
  arr[greatestIdx] = -1;

  return arr;

  //Time complexity O(N): In the worst case we iterate once over the input.
  //Space complexity O(1): By operating in-place on the input, we don't need to create a new data structure comparable in size.
};
