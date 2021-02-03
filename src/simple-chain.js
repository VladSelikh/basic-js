const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],
  result: '',

  getLength() {
    return this.chain.length;
  },
  addLink(value = ``) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (this.chain[position - 1] === undefined) {
      this.chain = [];
      this.result = '';
      throw new Error(`Invalid position parameter!`);
    };
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let tempChain = this.chain;
    let tempResult = this.result;

    tempChain.forEach((item, index, array) => {
      tempResult += (index === 0)? `( ${item} )~` : (index === array.length - 1)? `~( ${item} )` : `~( ${item} )~`
    })

    this.chain = [];
    this.result = '';

    return tempResult[tempResult.length - 1] === `~`? tempResult.substring(0, tempResult.length - 1) : tempResult;
  }
};

module.exports = chainMaker;

//console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain() === '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )')
