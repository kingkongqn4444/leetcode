/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function (happiness, k) {
  happiness.sort((a, b) => a - b);
  let total = 0;
  let count = 0;
  for (let i = happiness.length - 1; i >= 0; i--) {
    if (count < k) {
      total += happiness[i] - count > 0 ? happiness[i] - count : 0;
      count++;
    }
  }
  return total;
};

console.log(maximumHappinessSum([12, 1, 42], 3));
