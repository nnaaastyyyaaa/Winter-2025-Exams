// Refactor following solution
// Copy only listed values from dict
'use strict';

const only = (array, ...keys) => {
  let result = {};
  for (const [key, value] of Object.entries(array)) {
    if (keys.includes(key)) {
      result[key] = value;
    }
  }
  return result;
};

module.exports = only;
