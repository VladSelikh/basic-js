const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) && arr.length ?
      1 + Math.max(...arr.map(item => this.calculateDepth(item))) :
      Array.isArray(arr) && !arr.length ? 1 : 0
  }
}
