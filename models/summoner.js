const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SummonerSchema = new Schema({
    id: String,
    accountId: String,
    puuid: String,
    name: String,
    profileIconId: Number,
    revisionDate: Number,
    summonerLevel: Number
});

const Summoner = mongoose.model("Summoner", SummonerSchema);

module.exports = Summoner;
