const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!date) {
        return 'Unable to determine the time of year!'
    }
    if (!(date instanceof Date && !isNaN(date.valueOf()))) {
        throw Error
    }
    let month = date.getMonth();
    if (month === 11 || (month >= 0 && month < 2)) {
        return 'winter';
    }
    if (month >= 2 && month < 5) {
        return 'spring'
    }
    if (month >= 5 && month < 8) {
        return 'summer'
    }
    if (month >= 8 && month < 11) {
        return 'autumn'
    }
};
