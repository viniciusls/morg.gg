const XRegExp = require('xregexp');

class Validator {
    static validateUsername(username) {
        const validNameRules = new XRegExp("^[0-9\\p{L} _.]+$");

        return XRegExp.test(username, validNameRules);
    }
}

module.exports = { Validator };
