
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix.length === undefined) {
    return [];
  }
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      matrix[i].reverse();
    }
  }
  let res = [];
  res = matrix.toString().split(",");
  return res.map((item) => Number(item));
};
