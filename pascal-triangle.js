function calcCellVal(row, diagonal) {
  let val = 1;
  for (let i = 1; i <= diagonal; i++) {
    val = (val * (row + 1 - i)) / i;
  }
  return val;
}

function calcDiagonalValue(endRow, diagonal) {
  return Array.from(Array(endRow + 1).keys()).reduce((acc, val) => {
    return acc + calcCellVal(val, diagonal);
  }, 0);
}

console.log(calcDiagonalValue(20, 4));
