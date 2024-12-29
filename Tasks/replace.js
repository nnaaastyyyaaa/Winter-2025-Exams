// Refactor following solution
// Replace substring with newstr
'use strict';

const replace = (str, substr, newstr) => {
  if (substr === '') {
    return str;
  } else {
    let res = '';
    const index = str.indexOf(substr);
    if (index === -1) {
      return res + str;
    } else {
      const start = str.substring(0, index);
      const end = str.substring(index + substr.length, str.length);
      return (res += start + newstr + end);
    }
  }
};

module.exports = replace;
