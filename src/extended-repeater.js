const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

    if (str === undefined) {
        throw Error
    }
    if (str !== null && typeof str !== 'string' && typeof str !== 'object') {
        str = str.toString();
    }
    if (!options.repeatTimes) {
        options.repeatTimes = 1
    }
    if (!options.separator) {
        options.separator = '+'
    }
    if (options.addition !== null) {
        if (options.addition !== false && !options.addition) {
            options.addition = ''
        } else if (typeof options.addition !== 'string' && typeof str !== 'object') {
            options.addition = options.addition.toString();
        }
    }
    if (!options.additionRepeatTimes) {
        options.additionRepeatTimes = 1
    }
    if (!options.additionSeparator) {
        options.additionSeparator = '|'
    }

    let string = '';
    let addition = '';
    for (let i = 0; i < options.additionRepeatTimes; i++) {
        addition += options.addition;
        if (i < options.additionRepeatTimes - 1) {
            addition += options.additionSeparator
        }
    }
    for (let j = 0; j < options.repeatTimes; j++) {
        string += str + addition;
        if (j < options.repeatTimes - 1) {
            string += options.separator
        }
    }

    return string
};
