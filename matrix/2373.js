/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  let length = grid.length - 2;
  let result = Array(length)
    .fill()
    .map(() => Array(length).fill(0));
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      let max = Math.max(
        grid[i][j],
        grid[i + 1][j],
        grid[i + 2][j],
        grid[i][j + 1],
        grid[i + 1][j + 1],
        grid[i + 2][j + 1],
        grid[i][j + 2],
        grid[i + 1][j + 2],
        grid[i + 2][j + 2]
      );
      result[i][j] = max;
    }
  }
  return result;
};

console.log(
  largestLocal([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ])
);
