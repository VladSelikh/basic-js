const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsNumber = Math.pow(2, disksNumber) - 1;
  return {
    turns: turnsNumber,
    seconds: Math.floor(turnsNumber * 3600 / turnsSpeed)
  }
};
