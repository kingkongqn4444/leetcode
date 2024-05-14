/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function (quality, wage, k) {
  let tile = [];
  let maxHeap = [];
  let max = 0;
  for (let i = 0; i < quality.length; i++) {
    tile.push([quality[i], wage[i], wage[i] / quality[i]]);
  }
  tile.sort((a, b) => a[2] - b[2]);
  let quanSum = 0;
  for (let i = 0; i < k; i++) {
    quanSum += tile[i][0];
    max = Math.max(max, tile[i][2]);
    maxHeap.push(tile[i]);
  }
  let res = max * quanSum;
  for (let i = k; i < quality.length; i++) {
    max = Math.max(max, tile[i][2]);
    quanSum = quanSum - maxHeap.shift()[0];
    maxHeap.sort((a, b) => b[0] - a[0]);
    maxHeap.unshift(tile[i]);
    quanSum += tile[i][0];
    res = Math.min(res, max * quanSum);
  }
  return res;
};

console.log(mincostToHireWorkers([3, 1, 10, 10, 1], [4, 8, 2, 2, 7], 3));
