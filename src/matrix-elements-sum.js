const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let arr = [];
  for(let i=0; i<matrix.length; i++) {
   for(let j=0; j<matrix[i].length; j++) {
     if(i === 0) {
       if(matrix[i][j] !== 0) {
         arr.push(matrix[i][j])
       }
     } else {
       if(matrix[i][j] !== 0 && matrix[i-1][j] !== 0) {
         arr.push(matrix[i][j])
       }
     }
   }
  }
  if(arr.length === 0) {
   return 0;
  }
  return arr.reduce((a, b) => a+b);
 }

module.exports = {
  getMatrixElementsSum
};
