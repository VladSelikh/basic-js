const CustomError = require("../extensions/custom-error");

module.exports =  function repeater(str, options) {
  options.separator = options.separator !== undefined? options.separator : '+';
  options.additionSeparator = options.additionSeparator !== undefined? options.additionSeparator : '|';
  options.repeatTimes = options.repeatTimes !== undefined? options.repeatTimes : 1;
  options.additionRepeatTimes = options.additionRepeatTimes !== undefined? options.additionRepeatTimes : 1;
  options.addition = options.addition !== undefined? options.addition : '';

  options.addition = options.addition !== null? options.addition : 'null';
  str = str !== null? str : 'null';

  let additionalString = options.addition.toString().concat(options.additionSeparator).repeat(options.additionRepeatTimes);
  let lastAdditionSeparatorIndex = additionalString.lastIndexOf(options.additionSeparator);
  additionalString = additionalString.substring(0, lastAdditionSeparatorIndex);
  resultString = str.toString().concat(additionalString, options.separator).repeat(options.repeatTimes);
  let lastSeparatorIndex = resultString.lastIndexOf(options.separator);

  return resultString.substring(0, lastSeparatorIndex);
};
