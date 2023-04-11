const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  let newArr =[];
  if(typeof arr !== 'object' || arr === null) {
    return false
  }
  for(let i=0; i<arr.length; i++) {
    if(typeof arr[i] === 'string') {
      if(arr[i][0] === ' ') {
        for(let j =0; j<arr[i].length; j++) {
          if(arr[i][j] !== ' ') {
            newArr.push(arr[i][j].toUpperCase());
            break
          }
        }
      } else {
        newArr.push(arr[i][0].toUpperCase());
      }} else {
        continue
    }
  }
  return newArr.sort().join('');
}

module.exports = {
  createDreamTeam
};
