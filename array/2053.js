/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(i, j);
      }
    }
  }
  console.log("=================", arr);
  return arr[k - 1] || "";
};

console.log(kthDistinct(["a", "b", "a", "c"], 2));
