const { Schema, model } = require("mongoose");

const characterSchema = Schema({
    _id: String,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: {type: String, ref: "planet"},
    films: [{type: String, ref: "film"}]
});

characterSchema.statics.insert = async (dataCharacter) =>{
    const data = await character.create(dataCharacter);
    return data; 
};

characterSchema.statics.list = async()=>{
    const data = await character.find();
    return data; 
}

const character = model("character", characterSchema );

module.exports = character; 