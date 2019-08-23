const axios = require('axios');

const { SummonersDao } = require('../dao/summoners.dao');

class SummonersService {
    constructor() {
        this.summonersDao = new SummonersDao();
    }

    async search(username, server) {
        try {
            let summoner = await this.summonersDao.findByNameAndServer(username, server);
            if (summoner) {
                return summoner;
            }

            const response = await axios.get(`${process.env['riotGamesAPIUrl_' + server]}/lol/summoner/v4/summoners/by-name/${username}?api_key=${process.env.riotGamesApiKey}`);
            summoner = response.data;
            summoner.server = server;

            await this.summonersDao.save(summoner);

            return summoner;
        } catch (e) {
            throw e;
        }
    }
}

module.exports = { SummonersService };
