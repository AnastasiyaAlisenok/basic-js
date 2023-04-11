const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    s1 = [...s1].sort();
    s2 = [...s2].sort();
    let count = 0;
    let len = s1.length < s2.length ? s1.length : s2.length;
    for(let i =0; i < len; i++) {
      let ind = s2.findIndex(item => item === s1[i]);
      if(ind >=0) {
        count++
        s2.splice(ind, 1)
      }
    }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
