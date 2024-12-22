// Refactor following solution
// Increment all numbers in dictionary
'use strict';

const incNumbers = (variables) => {
  const result = {};
  for (const element of Object.keys(variables)) {
    if ((typeof variables[element]).charAt(0).toUpperCase() === 'N') {
      variables[element] = variables[element] + 1;
    }
  }
  return result;
};

module.exports = incNumbers;
