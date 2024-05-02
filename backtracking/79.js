// @copilot disable-file

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;
  const bt = (row, col, index) => {
    if (index === word.length) return true;
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      board[row][col] !== word[index]
    )
      return false;

    const temp = board[row][col];
    board[row][col] = 0;

    const found =
      bt(row + 1, col, index + 1) ||
      bt(row - 1, col, index + 1) ||
      bt(row, col + 1, index + 1) ||
      bt(row, col - 1, index + 1);

    board[row][col] = temp;

    return found;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (bt(i, j, 0)) return true;
    }
  }

  return false;
};

const board = [
  ["a", "b"],
  ["c", "d"],
];
const word = "abcd";

console.log(exist(board, word)); // false
