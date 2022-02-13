const input = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const m = board.length;
  const n = board[0].length;
  let set = new Set();

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let value = board[i][j];

      if (value === '.') continue;

      const obj1 = {
        value: value,
        id: i,
        position: "r",
      };

      const obj2 = {
        value: value,
        id: j,
        position: "c",
      };

      const obj3 = {
        value: value,
        row: parseInt(i / 3),
        col: parseInt(j / 3),
      };

      if (
        set.has(JSON.stringify(obj1)) ||
        set.has(JSON.stringify(obj2)) ||
        set.has(JSON.stringify(obj3))
      ) {
        console.log(obj1, obj2, obj3);
        return false;
      }

      set.add(JSON.stringify(obj1));
      set.add(JSON.stringify(obj2));
      set.add(JSON.stringify(obj3));
    }
  }

  return true;
};

console.log(isValidSudoku(input));
