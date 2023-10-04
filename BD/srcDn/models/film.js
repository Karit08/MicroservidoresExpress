const { Schema, model } = require("mongoose");

const filmSchema = Schema({
    _id: String,
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: String,
    characters: [{ type: String, ref: "character" }],
    planets: [{ type: String, ref: "planet" }]
});

const film = model("film", filmSchema);

module.exports = film; 