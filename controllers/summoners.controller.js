const XRegExp = require('xregexp');

const { SummonersService } = require('../services/summoners.service');

class SummonersController {
    constructor() {
        this.summonersServices = new SummonersService();
    }

    search(req, res) {
        const validNameRules = new XRegExp("^[0-9\\p{L} _.]+$");

        if (!XRegExp.test(req.query.username, validNameRules)) {
            res.status(403).send({ error: 403, msg: `Username ${req.query.username} is not a valid name. Valid names includes any visible Unicode letter characters, digits (0-9), spaces, underscores, and periods.`})
        }

        this.summonersServices.search(req.query.username, req.query.server)
            .then(data => res.send(data))
            .catch(err => res.status(500).send({ error: 500, message: `Cannot retrieve and process summoners data. Result: ${err}` }))
    }
}

module.exports = { SummonersController };
