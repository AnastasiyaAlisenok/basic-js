const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
let alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(str, key) {
    if(str === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
    str = [...str.toUpperCase()];
    key = [...key.toUpperCase()];
    if(key.length < str.length) {
      let count = 0;
      for(let i=0; i<str.length; i++) {
        if(key[i] === undefined) {
          key.push(key[count]);
          count++
        }
      }
    }
    let encryptStr = [];
    let k = 0;
    for(let i=0; i<str.length; i++) {
    let indA = alph.findIndex(item => item === str[i]);
    let indB = alph.findIndex(item => item === key[i - k]);
    if(indA === -1) {
      k = k+1
    }
    console.log(k)
    
    let n = indA + indB;
    if(n >= 26) {
     n = n - 26;
    }
    if(indA === -1) {
      encryptStr[i] = str[i]
    } else {
      encryptStr[i] = alph[n]
    }
    }
    if(this.direct === false) {
      encryptStr.reverse();
      return encryptStr.join('')
    } else {
      return encryptStr.join('');
    }
    
  
  }
  decrypt(str, key) {
    if(str === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
    str = [...str.toUpperCase()];
    key = [...key.toUpperCase()];
    if(key.length < str.length) {
      let count = 0;
      for(let i=0; i<str.length; i++) {
        if(key[i] === undefined) {
          key.push(key[count]);
          count++
        }
      }
    }
    let encryptStr = [];
    let k = 0;
    for(let i=0; i<str.length; i++) {
    let indA = alph.findIndex(item => item === str[i]);
    let indB = alph.findIndex(item => item === key[i - k]);
    if(indA === -1) {
      k = k+1
    }
    let n = indA - indB;
    if(n < 0) {
     n = n + 26;
    }
    if(indA === -1) {
      encryptStr[i] = str[i]
    } else {
      encryptStr[i] = alph[n]
    }
    }
    if(this.direct === false) {
      encryptStr.reverse();
      return encryptStr.join('')
    } else {
      return encryptStr.join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
