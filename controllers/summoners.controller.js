const { SummonersService } = require('../services/summoners.service');
const { Validator } = require('../lib/validator');

class SummonersController {
    constructor() {
        this.summonersServices = new SummonersService();
    }

    async search(req, res) {
        if (!Validator.validateUsername(req.params.username)) {
            res.status(403).send({ error: 403, msg: `Username ${req.params.username} is not a valid name. Valid names includes any visible Unicode letter characters, digits (0-9), spaces, underscores, and periods.`})
        }

        return await this.summonersServices.search(req.params.username, req.params.server)
            .then(data => res.send(data))
            .catch(err => {
                console.log(err);

                return res.status(500).send({error: 500, message: `Cannot retrieve and process summoners data. ${err}`});
            });
    }

    async summoner(req, res) {
        if (!Validator.validateUsername(req.params.username)) {
            res.status(403).send({ error: 403, msg: `Username ${req.params.username} is not a valid name. Valid names includes any visible Unicode letter characters, digits (0-9), spaces, underscores, and periods.`})
        }

        return await this.summonersServices.summoner(req.params.username, req.params.server)
            .then(data => res.send(data))
            .catch(err => {
                console.log(err);

                return res.status(500).send({error: 500, message: `Cannot retrieve and process summoner data for ${req.params.username}. ${err}`});
            });
    }
}

module.exports = { SummonersController };
