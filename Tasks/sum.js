// Refactor following solution
// Sum all numbers from an array

const sum = (arr = 0) => {
  let result = 0;
  for (const element of arr) {
    let t = typeof element;
    if (t === 'number') {
      if (sum.length > 0) {
        const new_Sum = sum[sum.length - 1] + i;
        sum.push(new_Sum);
      }
    }
  }
  sum[0];
  return result;
};

module.exports = sum;
