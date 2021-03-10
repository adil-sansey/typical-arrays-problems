
exports.min = function min(array) {
  let min = 0;
  if (array) {
    for (let i = 0; i < array.length; i++) {
      min = Math.min(min, array[i]);
    }
  }
  return min;
}

exports.max = function max(array) {
  let max = 0;
  if (array) {
    for (let i = 0; i < array.length; i++) {
      max = Math.max(max, array[i]);
    }
  }
  return max;
}

exports.avg = function avg(array) {
  if (array && array.length !== 0) {
    return array.reduce((sum, current) => sum + current, 0) / array.length;
  } else return 0;
}
