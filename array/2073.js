/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
// var timeRequiredToBuy = function (tickets, k) {
//   let total = 0;
//   for (let i = 0; i < k; i++) {
//     for (let j = 0; j <= tickets.length; j++) {
//       if (tickets[j] > 0) {
//         tickets[j] = tickets[j] - 1;
//         total++;
//       }
//     }
//   }
//   return total;
// };

var timeRequiredToBuy = function (tickets, k) {
  let total = 0;

  for (let i = 0; i < tickets.length; i++) {
    if (i <= k) {
      total += Math.min(tickets[i], tickets[k]);
    } else {
      total += Math.min(tickets[i], tickets[k] - 1);
    }
  }
  return total;
};

console.log(timeRequiredToBuy([1, 1, 5, 1], 0));
