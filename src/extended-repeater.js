const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = {
  repeatTimes: 0,
  separator: `+`,
  addition: ``,
  additionRepeatTimes: 0,
  additionSeparator: `|`
}) {
  // let additionalString = options.addition.toString().concat(options.additionSeparator).repeat(options.additionRepeatTimes);
  // let lastAdditionSeparatorIndex = additionalString.lastIndexOf(options.additionSeparator);
  // additionalString = additionalString.substring(0, lastAdditionSeparatorIndex);
  // let resultString = str.toString().concat(additionalString, options.separator).repeat(options.repeatTimes);
  // let lastSeparatorIndex = resultString.lastIndexOf(options.separator);
  // return resultString.substring(0, lastSeparatorIndex);
  throw new CustomError(`Not implemented!`)
};

//console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }));