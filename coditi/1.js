//www.youtube.com/watch?v=r49VMiC-i4E&list=PLGGNei5YePYlwpad74hRd_pCZ3aDjgxre&index=2

// function singleNumber(arr) {
//   let count = {};
//   for (let i = 0; i < arr.length; i++) {
//     count[arr[i]] = count[arr[i]] + 1 || 1;
//   }

//   for (key in count) {
//     if (count.hasOwnProperty(key) && count[key] === 1) {
//       return key;
//     }
//   }
//   return null;
// }

var singleNumber = function (nums) {
  let result = 0;
  for (let num of nums) {
    result = result ^ num;
  }
  return result;
};

console.log("================asd==", singleNumber([9, 3, 9, 3, 9, 7, 9]));
