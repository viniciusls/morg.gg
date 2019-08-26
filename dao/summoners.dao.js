const Summoner = require('../models/summoner');

class SummonersDao {
    constructor() {
        this.summoner = Summoner;
    }

    async findByNameLikeAndServer(name, server) {
        return this.summoner.find({ name: new RegExp(name, "i"), server: server }).lean();
    }

    async findByNameAndServer(name, server) {
        return this.summoner.findOne({ name: name, server: server }).lean();
    }

    async save(summonerData) {
        await this.summoner.create(summonerData);
    }
}

module.exports = { SummonersDao };
