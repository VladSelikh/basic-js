const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date === undefined) return "Unable to determine the time of year!"
    const month = date.getMonth() + 1;
    if (month && Object.prototype.toString.call(date) === "[object Date]") {
        return (month === 12 || month < 3)? "winter" : (month >= 3 && month < 6)? "spring" :  (month >= 6 && month < 9)? "summer" : "autumn";
    } else {
        throw new Error('Not valid data!');
    }
};
