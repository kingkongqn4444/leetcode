/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const lenScore = score.length; // length
  const answer = new Array(lenScore);
  const scoreWithIndex = score.map((score, index) => [score, index]);

  // Sort the score in descending order
  scoreWithIndex.sort((a, b) => b[0] - a[0]);

  const rank = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  for (let i = 0; i < lenScore; i++) {
    if (rank[i]) {
      answer[scoreWithIndex[i][1]] = rank[i];
    } else {
      answer[scoreWithIndex[i][1]] = String(i + 1);
    }
  }
  return answer;
};

/*

1 . Tạo 1 array 2 chiều lưu lại điểm và index của điểm đó trong mãng

2. Sort array này theo vị trí của array thứ 0 trong mãng

3. Tạo mãng rank để cập nhật vị trí

*/

console.log(findRelativeRanks([10, 3, 8, 9, 4]));
