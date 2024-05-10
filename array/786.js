/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
  let a = [];
  let i = 0;
  let j = arr.length - 1;
  while (j >= i) {
    if (j === i) {
      j = arr.length - 1;
      i++;
    }
    if (i !== j) {
      a.push([arr[i], arr[j], arr[i] / arr[j]]);
    }
    j--;
  }
  a.sort((a, b) => a[2] - b[2]);
  return [a[k - 1][0], a[k - 1][1]];
};
