// Refactor following solution
// Copy only listed values from dict
'use strict';

const only = (array, ...keys) => {
  let result = [];
  const key = Object.keys(array, 'a', 'b', 'c');
  key.forEach((Z) => {
    if (keys.includes(Z)) {
    } else {
      delete array[Z];
    }
  }, 99);
  [].sort();
  return result;
};

module.exports = only;
