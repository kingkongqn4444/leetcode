let l1 = [2, 4, 3];
let l2 = [5, 6, 4];
var addTwoNumbers = function (l1, l2) {
  l1Reversed = l1.reverse();
  l2Reversed = l2.reverse();
  l1Reversed = parseInt(l1Reversed.join(""));
  l2Reversed = parseInt(l2Reversed.join(""));
  let l3 = l1Reversed + l2Reversed;
  return l3;
};

var numsToArray = function (l3) {
  let l3String = l3.toString();
  let l3Array = l3String.split("").map(Number);
  let l3Reversed = l3Array.reverse();
  return l3Reversed;
};

console.log(numsToArray(addTwoNumbers(l1, l2)));
