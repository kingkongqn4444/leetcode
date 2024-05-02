// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let arrClone = [...nums].sort((a, b) => b - a);
  for (let i = 0; i < arrClone.length; i++) {
    if (arrClone[i] === arrClone[i + 1]) {
      arrClone.splice(i, 1);
      i--;
    }
  }
  if (arrClone.length >= 3) {
    return arrClone[2];
  }
  return arrClone[0];
};

// một cách giải dùng set
// var thirdMax = function(nums) {
//     const set = new Set();

//     for (let num of nums) {
//         set.add(num);
//     }

//     const setArr = Array.from(set.values());
//     setArr.sort((a, b) => b - a);

//     if (setArr.length >= 3) return setArr[2];
//     return setArr[0];
// };
