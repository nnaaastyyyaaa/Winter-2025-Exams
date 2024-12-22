// Refactor following solution
// Increment all numbers in dictionary
'use strict';

const incNumbers = (variables) => {
  const result = {};
  for (const element of Object.keys(variables)) {
    const value = variables[element];
    result[element] = typeof value === 'number' ? value + 1 : value;
  }
  return result;
};

module.exports = incNumbers;
