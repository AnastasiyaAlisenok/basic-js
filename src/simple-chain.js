const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
let array = [];

const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    if(value === undefined) {
      this.array.push(`( )`);
      return this;
    } else {
      this.array.push(`( ${value} )`);
      return this;
    }
  },
  removeLink(position) {
    if(! Number(position) || position > this.array.length || position <=0) {
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      position = position-1
      this.array.splice(position, 1);
      return this;
    }
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
   let array = this.array;
   array = array.join('~~');
   this.array = [];
   console.debug(this.array)
   return array;
  }
};

module.exports = {
  chainMaker
};
