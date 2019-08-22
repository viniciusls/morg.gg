const axios = require('axios');

class SummonersService {
    constructor() {

    }

    async search(username, server) {
        try {
            const response = await axios.get(`${process.env['riotGamesAPIUrl_' + server]}/lol/summoner/v4/summoners/by-name/${username}?api_key=${process.env.riotGamesApiKey}`);

            return response.data;
        } catch (e) {
            throw e;
        }
    }
}

module.exports = { SummonersService };
