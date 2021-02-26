const CustomError = require("../extensions/custom-error");

//module.exports = 
class DepthCalculator {
  constructor() {
    this.depth = 1;
  }
  calculateDepth(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] instanceof Array) {
        this.depth++;
        this.calculateDepth(arr[i]);
        break;
      }
    }
    return this.depth;
  }
};

const depthCalc = new DepthCalculator();
console.log(depthCalc.calculateDepth([1, 2, 3, [1, [1]], 4, 5, [1]]));
console.log(depthCalc.calculateDepth([1, 2, 3, [1, [1]], [1]]));
//console.log(typeof {key: `value`}.join());