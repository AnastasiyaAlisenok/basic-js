const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = [...n.toString()].map(Number);
  n = n.map((item, ind) => {
    let str = n.slice();
    str.splice(ind, 1);
    return Number(str.join(''));
  });
return Math.max.apply(null, n);
}

module.exports = {
  deleteDigit
};
