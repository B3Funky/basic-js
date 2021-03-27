const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

    constructor(mode) {
        this.mode = mode;
        this.dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    encrypt(message, key) {

        if (!message || !key) {
            throw Error
        }

        let messageToUpperCase = message.toUpperCase();
        let keyToUpperCase = key.toUpperCase();
        let newKey = '';
        for (let k = 0, l = 0; k < messageToUpperCase.length; k++) {
            newKey += keyToUpperCase[l];
            l++;
            if (l === keyToUpperCase.length) {
                l = 0
            }
        }

        let encryptedMessage = '';
        let iForKey = 0;
        for (let i = 0; i < messageToUpperCase.length; i++) {
            if (/[A-Z]/.test(messageToUpperCase[i])) {
                encryptedMessage += this.dictionary[((messageToUpperCase[i].charCodeAt(0) - 65)
                    + (newKey[iForKey++].charCodeAt(0) - 65)) % this.dictionary.length]
            }
            else {
                encryptedMessage += messageToUpperCase[i];
            }
        }

        if (this.mode === true || this.mode === undefined) {
            return encryptedMessage
        }
        if (this.mode === false) {
            return encryptedMessage.split('').reverse().join('')
        }

    }

    decrypt(message, key) {

        if (!message || !key) {
            throw Error
        }

        let messageToUpperCase = message.toUpperCase();
        let keyToUpperCase = key.toUpperCase();
        let newKey = '';
        for (let k = 0, l = 0; k < messageToUpperCase.length; k++) {
            newKey += keyToUpperCase[l];
            l++;
            if (l === keyToUpperCase.length) {
                l = 0
            }
        }

        let decryptedMessage = '';
        let iForKey = 0;
        for (let i = 0; i < messageToUpperCase.length; i++) {
            if (/[A-Z]/.test(messageToUpperCase[i])) {
                decryptedMessage += this.dictionary[((messageToUpperCase[i].charCodeAt(0) - 65)
                    + this.dictionary.length - (newKey[iForKey++].charCodeAt(0) - 65)) % this.dictionary.length]
            }
            else {
                decryptedMessage += messageToUpperCase[i];
            }
        }

        if (this.mode === true || this.mode === undefined) {
            return decryptedMessage
        }
        if (this.mode === false) {
            return decryptedMessage.split('').reverse().join('')
        }
    }

}

module.exports = VigenereCipheringMachine;
