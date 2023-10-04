const modelName = require("../utils/modelName"); 
const insert= require("../service/insert");
const list = require("../service/list");
const response = require("../utils/reponse");

const name = modelName.character;

const createCharacter = async (req, res) =>{
    const dataModel = await insert(name, req.body);  
    // return res.status(200).json(dataModel); 
    return response(res, dataModel, 201); 
};

const listCharacter = async (req, res)=>{
    const allCharacter= await list(name);
    // return res.status(200).json(allCharacter); 
    return response(res, allCharacter, 200);
};

module.exports= {
    createCharacter,
    listCharacter,
};
