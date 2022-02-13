/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let realLength = matrix.length;
  for (let i = 0; i < realLength; i++) {
    let row = [];
    for (let j = realLength - 1; j >= 0; j--) {
      row.push(matrix[j][i]);
    }

    matrix.push(row);
  }

  for (let i = 0; i < realLength; i++) {
    matrix.shift();
  }
};
