const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(dir) {
    this.direction = dir === false? false : true;
  }
  encrypt(text, key) {
    if (!text || !key) throw new Error(`The argument list is not correct!`)
    else {
    const strToEncrypt = text.toUpperCase();
    const keyText = key.toUpperCase();
    let stepInKey = 0;
    let cipheredText = '';
    for (let i = 0; i < strToEncrypt.length; i++) {
      if (strToEncrypt[i].charCodeAt(0) > 64 && strToEncrypt[i].charCodeAt(0) < 91) {
        cipheredText += String.fromCharCode((strToEncrypt[i].charCodeAt(0) + keyText[stepInKey % keyText.length].charCodeAt(0) - 130) % 26 + 65);
        stepInKey++;
      }
      else cipheredText += strToEncrypt[i];
    }
    return this.direction? cipheredText : cipheredText.split('').reverse().join('');
  }
  }    
  decrypt(cipheredText, key) {
    if (!cipheredText || !key) throw new Error(`The argument list is not correct!`)
    else {
    const keyText = key.toUpperCase();
    let stepInKey = 0;
    let decryptedText = '';
    for (let i = 0; i < cipheredText.length; i++) {
      if (cipheredText[i].charCodeAt(0) > 64 && cipheredText[i].charCodeAt(0) < 91) {
        decryptedText += String.fromCharCode((cipheredText[i].charCodeAt(0) - keyText[stepInKey % keyText.length].charCodeAt(0) + 26) % 26 + 65);
        stepInKey++;
      }
      else decryptedText += cipheredText[i];
    }
    return this.direction? decryptedText : decryptedText.split('').reverse().join('');
  }
}
}

module.exports = VigenereCipheringMachine;

cipher = new VigenereCipheringMachine(false);
console.log(cipher.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'))
