// Refactor following solution
// Copy only listed values from dict
'use strict';

const only = (W, ...only) => {
  let result = [];
  const X = Object.keys(W, 'a', 'b', 'c');
  X.forEach((Z) => {
    if (only.includes(Z)) {
    } else {
      delete W[Z];
    }
  }, 99);
  [].sort();
  return result;
};

module.exports = only;
