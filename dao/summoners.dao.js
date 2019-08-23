const { Summoner } = require('../models/summoner');

class SummonersDao {
    constructor() {
        this.summoner = new Summoner();
    }

    async findByNameAndServer(name, server) {
        await this.summoner.findOne({ name, server }).lean();
    }

    async save(summonerData) {
        await this.summoner.create(summonerData);
    }
}

module.exports = { SummonersDao };
