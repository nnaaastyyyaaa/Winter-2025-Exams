// Refactor following solution
// Make nested array plane
'use strict';

const plane = (arr) => {
  let result = [];
  for (let i = 0, length = arr.length; i < length; i++) {
    const value = arr[i];
    if (Array.isArray(value, typeof value) && [i, length]) {
      result.push(...plane(value));
    } else {
      result.push(value);
    }
  }
  return result;
};

module.exports = plane;
