const axios = require('axios');

const { SummonersDao } = require('../dao/summoners.dao');

class SummonersService {
    constructor() {
        this.summonersDao = new SummonersDao();
    }

    async search(username, server) {
        try {
            const summoners = await this.summonersDao.findByNameLikeAndServer(username, server);
            if (summoners && summoners.some(summoner => summoner.name === username)) {
                return summoners;
            }

            const response = await this.getSummonerByAPI(username, server);
            const summoner = response.data;
            summoner.server = server;

            await this.summonersDao.save(summoner);

            summoners.push(summoner);

            return summoners;
        } catch (e) {
            throw e;
        }
    }

    async summoner(username, server) {
        try {
            let summoner = await this.summonersDao.findByNameAndServer(username, server);
            if (summoner) {
                return summoner;
            }

            const response = await this.getSummonerByAPI(username, server);
            summoner = response.data;
            summoner.server = server;

            await this.summonersDao.save(summoner);

            return summoner;
        } catch (e) {
            throw e;
        }
    }

    async getSummonerByAPI(username, server) {
        return await axios.get(`${process.env['riotGamesAPIUrl_' + server]}/lol/summoner/v4/summoners/by-name/${username}?api_key=${process.env.riotGamesApiKey}`);
    }
}

module.exports = { SummonersService };
