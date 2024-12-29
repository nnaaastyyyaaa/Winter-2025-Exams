// Refactor following solution
// Filter array by type name
'use strict';

const filter = (array, typeName) => {
  let result = [];
  for (const element of array) {
    if (typeof element === typeName) {
      result.push(element);
    }
  }
  return result;
};

module.exports = filter;
