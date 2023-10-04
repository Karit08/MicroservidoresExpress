const models = require("../models")

const insertData = async (model, data) =>{
    const dataModels = await models[model].insert(data);
    return dataModels;
};

module.exports = insertData;