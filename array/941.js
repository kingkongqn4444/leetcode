/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let length = arr.length;
  if (length < 3) {
    return false;
  }
  let peak = true;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > arr[i + 1] && peak) {
      peak = false;
    } else if ((!peak && arr[i] <= arr[i + 1]) || arr[i] === arr[i + 1]) {
      peak = false;
    }
  }
  return !peak;
};

console.log(validMountainArray([3, 7, 6, 4, 3, 0, 1, 0]));

// Một cách giải khác
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let n = arr.length;
  let i = 0;

  // walk up
  while (i + 1 < n && arr[i] < arr[i + 1]) {
    i++;
  }

  // peak can't be first or last
  if (i === 0 || i === n - 1) {
    return false;
  }

  // walk down
  while (i + 1 < n && arr[i] > arr[i + 1]) {
    i++;
  }

  return i === n - 1;
};
