/**
 * @param {string} s
 * @return {string}
 */
// var makeGood = function (s) {
//   const stack = [];

//   for (const char of s) {
//     console.log(char);
//     if (
//       stack.length > 0 &&
//       Math.abs(char.charCodeAt() - stack[stack.length - 1].charCodeAt()) === 32
//     ) {
//       stack.pop();
//     } else {
//       stack.push(char);
//     }
//   }
//   return stack.join("");
// };

// một cách khác
// var makeGood = function(s) {
//     for(let i=1;i<s.length;i++){
//         if(s[i] && s[i-1] && Math.abs(s[i].charCodeAt() - s[i-1].charCodeAt())==32){
//           let sArray=  s.split("");
//           sArray.splice(i-1,2)
//           s=sArray.join("");
//             i=i-2;
//         }
//     }
//     return s;
// };

console.log("=================", makeGood("abBAcC"));
