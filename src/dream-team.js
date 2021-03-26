const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false
    }
    let teamName = '';
    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] === 'string') {
            teamName += members[i].trim()[0].toUpperCase()
        }
    }
    return teamName.split('').sort().join('')
};
