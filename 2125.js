/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
  let numberOfBim = 0;
  let arrayTotal = [];
  for (let i = 0; i < bank.length; i++) {
    const sum = bank[i]
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0);
    arrayTotal.push(sum);
  }

  let i = 0;
  while (i < arrayTotal.length - 1) {
    let left = arrayTotal[i];
    if (left === 0) {
      i++;
      continue;
    }
    let j = i + 1;
    while (j < arrayTotal.length && arrayTotal[j] === 0) {
      j++;
    }
    if (j >= arrayTotal.length) break;
    let right = arrayTotal[j];

    numberOfBim += left * right;
    i += 1;
  }
  return numberOfBim;
};

console.log(numberOfBeams(["011001", "000000", "010100", "001000"]));

// Cách giải hay hơn

let numberOfBeams = function (bank) {
  let previous;
  let sum = 0;
  for (let i = 0; i < bank.length; i++) {
    let count = 0;
    for (let k = 0; k < bank[i].length; k++) {
      if (bank[i][k] == "1") {
        count++;
      }
    }
    if (previous == undefined) {
      previous = count;
    } else if (count > 0) {
      sum += previous * count;
      previous = count;
    }
  }

  return sum;
};
