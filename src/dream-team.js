const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let initLetArr = members.map(item => {
    if (typeof item !== "string") {
      return '';
    } else {
      for (let i = 0; i < item.length; i++) {
        if (item.charCodeAt(i) > 64 && item.charCodeAt(i) < 91) {
          return item[i];
        } else if (item.charCodeAt(i) > 96 && item.charCodeAt(i) < 123) {
          return String.fromCharCode(item.charCodeAt(i) - 32)
        }
      }
    }
  });
  let alphOrdArr = initLetArr.sort();
  return alphOrdArr.join('');
};
