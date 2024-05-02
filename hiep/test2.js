// var doNuoc = function (k, n) {
//   let count = 0;
//   for (let i = n; i > 0; i--) {
//     if (k >= i) {
//       k -= i;
//       count++;
//     }
//   }
//   return count;
// };

// console.log(doNuoc(11, 10));

function phanTuXuatHienNhieuNhat(str) {
  const mangChuoi = str.split("");
  mangChuoi.sort();
  let max = 0;
  let count = 1;
  let maxChar = "";
  for (let i = 0; i < mangChuoi.length; i++) {
    if (mangChuoi[i] === mangChuoi[i + 1]) {
      count++;
    } else {
      if (count > max) {
        max = count;
        maxChar = mangChuoi[i];
        console.log("================", maxChar);
      }
      count = 1;
    }
  }
  console.log("===", count);
  return maxChar;
}
console.log(
  phanTuXuatHienNhieuNhat(
    "abaabbbsdbbBasasbbbasdadazzbbbbzbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  )
);
