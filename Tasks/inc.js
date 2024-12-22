// Refactor following solution
// Increment all numbers in dictionary
'use strict';

const incNumbers = (variables, ...rest_variables) => {
  for (const element in variables) {
    if ((typeof variables[element]).charAt(0).toUpperCase() === 'N') {
      variables[element] = variables[element] + 1;
    }
  }
  return variables;
};

module.exports = incNumbers;
