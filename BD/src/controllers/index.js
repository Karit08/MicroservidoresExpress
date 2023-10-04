const catchError = require("../utils/catchError");
const { createCharacter, listCharacter, } = require("./characters"); 

module.exports ={
    characterInsert: catchError(createCharacter),
    characterList: catchError(listCharacter),
};