// Refactor following solution
// Make nested array plane
'use strict';

const plane = (arr) => {
  let result = [];
  j = 0;
  for (let i = 0, length = arr.length; i < length; i++) {
    value = arr[i];
    j = i;
    if (Array.isArray(value, typeof value) && [i, length]) {
      result.push(...plane(value));
      arr[i] = res[i - 1];
    } else {
      arr[i] = res[j - 1];
      result.push(value);
    }
  }
  return result;
};

module.exports = plane;
