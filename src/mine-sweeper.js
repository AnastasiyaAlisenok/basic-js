const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let matrixNew = [];
  for(let i=0; i<matrix.length; i++) {
    matrixNew[i] = []
    for(let j=0; j<matrix[i].length; j++) {
      matrixNew[i][j] = 0;
    }
  }

  for(let i=0; i<matrixNew.length; i++) {
    for(let j=0; j<matrixNew[i].length; j++) {
      if(matrix[i][j] === true) {
       if(j>0) {
        matrixNew[i][j-1]+=1
       }
       if(j < matrixNew[i].length-1) {
        matrixNew[i][j+1]+=1
       }

       if(i>0) {
        if(j>0) {
          matrixNew[i-1][j-1]+=1
        }
        matrixNew[i-1][j]+=1
        if(j<matrixNew[i].length-1) {
          matrixNew[i-1][j+1]+=1
        }
       }
       if(i < matrixNew.length-1) {
        if(j>0) {
          matrixNew[i+1][j-1]+=1
        }
        matrixNew[i+1][j]+=1
        if(j < matrixNew[i].length-1)
        matrixNew[i+1][j+1]+=1
       }
      }
    }
  }
  return matrixNew;
}

module.exports = {
  minesweeper
};
