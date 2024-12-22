// Refactor following solution
// Sum all numbers from an array

const sum = (arr = 0) => {
  let result = 0;
  for (const element of arr) {
    if (typeof element === 'number') {
      result += element;
    }
  }
  return result;
};

module.exports = sum;
