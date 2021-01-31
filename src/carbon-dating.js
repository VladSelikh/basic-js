const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let sampleNum = +sampleActivity;
  if (sampleNum > MODERN_ACTIVITY || typeof sampleActivity !== 'string' || isNaN(sampleActivity) || sampleActivity === undefined) {
    return false;
    }
    let lnVar = Math.log(MODERN_ACTIVITY / sampleNum);
    return isFinite(Math.ceil(lnVar / 0.693 * HALF_LIFE_PERIOD))? Math.ceil(lnVar / 0.693 * HALF_LIFE_PERIOD) : false;
  }