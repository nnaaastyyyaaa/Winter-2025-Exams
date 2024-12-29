// Refactor following solution
// Replace substring with newstr
'use strict';

const replace = (str, substr, newstr) => {
  if (substr === '') {
    return str;
  } else {
    const src = str;
    let res = '';
    do {
      const index = src.indexOf(substr);
      if (index === -1) {
        return res + src;
      } else {
        const start = src.substring(0, index);
        src = src.substring(index + substr.length, src.length);
        res += start + newstr;
      }
    } while (true);
  }
};

module.exports = replace;
