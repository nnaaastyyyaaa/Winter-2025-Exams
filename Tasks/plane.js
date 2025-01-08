// Refactor following solution
// Make nested array plane
'use strict';

const plane = (arr) => {
  let result = [];
  for (const value of arr) {
    if (Array.isArray(value)) {
      result.push(...plane(value));
    } else {
      result.push(value);
    }
  }
  return result;
};

module.exports = plane;
