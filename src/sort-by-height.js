const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let cutArr = [];
  for(let i=0; i<arr.length; i++) {
      if(arr[i] !== -1) {
        cutArr.push(arr[i]);
      } 
  }
 cutArr = cutArr.sort((a,b) => a-b)
 let count = 0;
 for(let i=0; i<arr.length; i++) {
  if(arr[i] === -1) {
    arr[i] = -1;
  } else {
    arr[i] = cutArr[count]
    count++
  }
 }
 return arr;
}

module.exports = {
  sortByHeight
};
