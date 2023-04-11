const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if(! options.hasOwnProperty('separator')) {
    options.separator = '+';
  }
  if(! options.hasOwnProperty('additionSeparator')) {
    options.additionSeparator = '|';
  }
  if(! options.hasOwnProperty('repeatTimes') || ! options.hasOwnProperty('additionRepeatTimes')) {
    if(! options.hasOwnProperty('additionRepeatTimes')) {
      if(! options.hasOwnProperty('addition')) {
        str = str;
      } else {
        str += options.addition;
      }
      
    } else {
      str += options.addition + options.additionSeparator;
    } 
  }
  
  for(let i=0; i<options.repeatTimes-1; i++) {
    if(! options.hasOwnProperty('addition')) {
    str = str;
    } else if(options.repeatTimes !== options.additionRepeatTimes) {
      str = str;
      
    } else {
      str += options.addition + options.additionSeparator;
      
    }
  }
  if((options.repeatTimes === options.additionRepeatTimes) && (options.hasOwnProperty('repeatTimes'))) {
    str = str + options.addition;
  }
  if(options.additionRepeatTimes > options.repeatTimes || options.additionRepeatTimes < options.repeatTimes) {
    if(options.additionRepeatTimes === 1) {
      str = str + options.addition;
    } else {
      str = str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes-1) + options.addition;
    }
    
  }
 let newStr = str + options.separator;
  return (options.repeatTimes === 1 || !options.hasOwnProperty('repeatTimes')) ? str : newStr.repeat(options.repeatTimes-1) + str;
}


module.exports = {
  repeater
};
