const XRegExp = require('xregexp');

class SummonersController {
    search(req, res) {
        const validNameRules = new XRegExp("^[0-9\\p{L} _.]+$");

        if (!XRegExp.test(req.query.username, validNameRules)) {
            res.status(403).send({ error: 403, msg: `Username ${req.query.username} is not a valid name. Valid names includes any visible Unicode letter characters, digits (0-9), spaces, underscores, and periods.`})
        }
    }
}

module.exports = { SummonersController };
