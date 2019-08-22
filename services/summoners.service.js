const axios = require('axios');

class SummonersService {
    constructor() {

    }

    async search(username, server) {
        try {
            return await axios.get(`${process.env['riotGamesAPIUrl_' + server]}/lol/summoner/v4/summoners/by-name/${username}`);
        } catch (e) {
            console.log(`Error requesting summoners data`);

            throw new Error(`Error requesting summoners data. Response: ${e}`);
        }
    }
}

module.exports = { SummonersService };
