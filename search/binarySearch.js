// Implement of binary search
// This function only searching with the sorted array

function binarySearch(arr, val) {
  let length = arr.length;
  let right = length - 1;
  let left = 0;
  let median = Math.floor((right + left) / 2);
  while (arr[median] !== val) {
    if (val > arr[median]) {
      left = median + 1;
    } else {
      right = median - 1;
    }
    median = Math.floor((right + left) / 2);
  }
  return median;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 19], 3));
