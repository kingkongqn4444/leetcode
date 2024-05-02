/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const words = s.trim();
  let finalString = "";
  const arryword = words.split(" ").reverse();
  for (let i = 0; i < arryword.length; i++) {
    if (arryword[i] != "") {
      finalString += arryword[i].trim() + " ";
    }
  }
  return finalString.trim();
};

// var reverseWords = function(s) {
//     let arr = s.split(" ");
//       let strArr = arr.reverse().filter(f => f!="");
//       return strArr.join(" ");
//   };

console.log("=================asd=====", reverseWords("a good   example"));
