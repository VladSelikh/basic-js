const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let resultArray = [];
    if (!Array.isArray(arr)) throw new Error(`The argument passed is not an array!`);

    arr.forEach((item, index, array) => {
      if (item === `--discard-prev`) {
        resultArray[resultArray.length - 1] = '--discarded';
      } else if (item === `--double-prev`) {
        resultArray.push(resultArray[resultArray.length - 1]);
      } else if (item === `--double-next`) {
        resultArray.push(array[index + 1]);
      } else if (resultArray[resultArray.length - 1] === '--discard-next') {
        resultArray.push(`--discarded`);
      } else resultArray.push(item);
    })
    
    return resultArray.filter((item) => item !== undefined && item !== `--discard-next` && item !== `--discarded`);
}
