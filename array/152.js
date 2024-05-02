/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxProduct = function (nums) {
//   if (nums.length === 1) {
//     return nums[0];
//   }
//   let max = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let temp = nums[i];
//     console.log("======================", temp);
//     if (i === nums.length - 1) {
//       return Math.max(max, temp);
//     }
//     for (let j = i + 1; j < nums.length; j++) {
//       temp = temp * nums[j];
//       max = Math.max(max, temp);
//     }
//   }
//   return max;
// };

var maxProduct = function (nums) {
  let mini, maxi, res;
  mini = maxi = res = nums[0]; // Tất cả các giá trị bắt đầu bằng num[0]

  for (let num of nums.slice(1)) {
    // Chạy vòng lặp bắt đầu từ vị trí số 1
    const currMini = Math.min(num, num * maxi, num * mini); // currMini là giá trị nhỏ nhất của số (hiện tại, số hiện tại * maxi, số hiện tại * mini)
    const currMaxi = Math.max(num, num * maxi, num * mini); // currMaxi là giá trị lớn nhất của số (hiện tại, số hiện tại * maxi, số hiện tại * mini)

    console.log({
      max: currMaxi,
      min: currMini,
      num,
      numMax: num * maxi,
      numMin: num * mini,
    });
    maxi = currMaxi;
    mini = currMini;
    res = Math.max(res, maxi);
  }

  return res;
};

// Cách tối ưu hơn
// var maxProduct = function(nums) {
//     let max = -Infinity;
//     let currMax = 1, currMin = 1;
//     for (let i = 0; i < nums.length; i++) {
//       max = Math.max(nums[i], max);
//       if (nums[i] === 0) {
//         currMax = 1, currMin = 1;
//         continue;
//       };
//       [currMin, _, currMax] = [currMax * nums[i], currMin * nums[i], nums[i]].sort((a, b) => a - b);
//       max = Math.max(currMax, max);
//     };
//     return max;
//   };

console.log("=========", maxProduct([-3, 2, 5, -1, 4]));
