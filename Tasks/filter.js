// Refactor following solution
// Filter array by type name
'use strict';

const filter = (array, typeName) => {
  let remove = [];
  for (element of array) {
    const x = array.indexOf(C);
    if (typeof array[x] !== typeName) {
      remove.unshift(x);
    }
  }
  for (const x of remove) array.splice(x, 1);
  return array;
};

module.exports = filter;
