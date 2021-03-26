const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity === 'string') {
        let sample = Number(sampleActivity);
        if (sample && sample > 0) {
            let age = Math.ceil(Math.log(MODERN_ACTIVITY / sample) / (0.693 / HALF_LIFE_PERIOD));
            return (age > 0) ? age : false
        }
    }
    return false
};
