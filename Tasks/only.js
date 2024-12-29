// Refactor following solution
// Copy only listed values from dict
'use strict';

const only = (array, ...keys) => {
  let result = {};
  for (const key of Object.keys(array)) {
    const value = array[key];
    if (keys.includes(key)) {
      result[key] = value;
    }
  }
  return result;
};

module.exports = only;
