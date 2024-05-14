/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function (jobDifficulty, d) {
  let jobLength = jobDifficulty.length;
  let total = 0;
  if (jobLength < d) {
    return -1;
  }
  if (jobLength === d) {
    for (let i = 0; i < jobLength; i++) {
      total += jobDifficulty[i];
    }
  } else {
    jobDifficulty.sort((a, b) => b - a);
    for (let i = 0; i < d - 1; i++) {
      total += jobDifficulty.pop();
    }
    total += jobDifficulty[0];
  }
  return total;
};

console.log(minDifficulty([7, 1, 7, 1, 7, 1], 3));
