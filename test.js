// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// var findMedianSortedArrays = function (nums1, nums2) {
//   let array2 = nums1.concat(nums2);
//   const totallenght = nums1.length + nums2.length;
//   array2.sort((a, b) => a - b);
//   let medium = 0;
//   if (nums1.length === 0 && nums2.length === 0) {
//     return 0;
//   }
//   if (array2.length % 2 !== 0) {
//     medium = array2[parseInt(array2.length / 2)];
//   } else {
//     medium =
//       (array2[parseInt(totallenght / 2)] +
//         array2[parseInt(totallenght / 2 - 1)]) /
//       2;
//   }
//   return medium;
// };

// console.log(findMedianSortedArrays([1, 3], [2, 6]));

// let a = [20];

// let text = "The rain in SPAIN stays mainly in the plain";
// let index = text.match("ain");
// console.log(index);

// function same(a1, a2) {
//   for (let i = 0; i < a1.length; i++) {
//     let correctIndex = a2.indexOf(a1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     a2.splice(correctIndex, 1);
//   }
//   return true;
// }

// function same(arr1, arr2) {
//   if (arr1.length != arr2.length) {
//     return false;
//   }
//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};
//   for (let val of arr1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }
//   for (let val of arr1) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }
//   for (let key in frequencyCounter1) {
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false;
//     }
//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// bài 2
// function validAnagram(s1, s2) {
//   let frequencyCounter1 = {};
//   for (let char of s1) {
//     frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
//   }

//   for (let key of s2) {
//     if (!frequencyCounter1[key]) {
//       return false;
//     }
//     frequencyCounter1[key]--;
//   }
//   return true;
// }

// Bài 3

// Two pointer
// Tạo 2 con trỏ 1 con chạy từ đầu 1 con chạy  về cuối

// function sumZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let sum = arr[left] + arr[right];
//     console.log({ sum, left, arrleft: arr[left], right, arrRigh: arr[right] });
//     if (sum === 0) {
//       return [arr[left], arr[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }

// Bài 4

// countUniqueValues

// function countUniqueValues(arr) {
//   let arrResult = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       arrResult[i];
//     }
//   }
// }

// function countUniqueValues(arr) {
//   let a = new Set(arr);
//   return a.size;
// }

// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

// const userDetails = {
//   name: "John Doe",
//   age: 14,
//   status: {
//     verified: false,
//   },
// };
// let cloneUser1 = { ...userDetails };
// cloneUser1.name = "123";

// console.log("cloneUser1", cloneUser1);
// console.log("userDetails", userDetails);

// const nguoi = {
//   ten: "Hiep",
//   tuoi: 23,
//   pet: "chó",
// };

// const arrayNguoi = Object.entries(nguoi);

// Cloning the Object with Spread Operator
// console.log(Object.entries(arrayNguoi[0][0]));

//

// const maxSubarraySum = (array, num) => {
//   let max = 0;
//   for (let i = 0; i < array.length - num; i++) {
//     let total = 0;
//     for (let j = i; j < i + num; j++) {
//       total += array[j];
//     }
//     max = Math.max(total, max);
//   }
//   return max;
// };

// console.log(maxSubarraySum([-2, -5, -3, -1, -11, -7, -6, -4], 2));

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// const sameFrequency = (num1, num2) => {
//   const num1Str = String(num1);
//   const num2Str = String(num2);

//   if (num1Str.length !== num2Str.length) {
//     return false; // If lengths are different, frequencies cannot be the same
//   }

//   const frequencyCounter = {};

//   for (let digit of num1Str) {
//     frequencyCounter[digit] = (frequencyCounter[digit] || 0) + 1;
//   }

//   for (let digit of num2Str) {
//     if (!frequencyCounter[digit]) {
//       return false; // If a digit in num2 doesn't exist in num1, frequencies cannot be the same
//     }
//     frequencyCounter[digit] -= 1;
//   }

//   return true;
// };

// console.log(sameFrequency(182, 281));

// function areThereDuplicates(...rest) {
//   let object = {};
//   for (let num of rest) {
//     if (object[num] === 1) {
//       return true;
//     } else {
//       object[num] = (object[num] || 0) + 1;
//     }
//   }
//   return false;
// }

// console.log(areThereDuplicates("a", "b", "c", "a"));

// const averagePair = () => {};

// console.log(averagePair([1, 2, 3], 2.5));

// let aaa = "asasdasdasd";
// let b = aaa.split("");
// console.log(b);

function sumRange(num) {
  if (num === 1) return 1;
  console.log(num);
  return num + sumRange(num - 1);
}

console.log(sumRange(5));
