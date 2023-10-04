const models = require("../models");

const listService = async (nameModel)=>{
    const dataModels = await models[nameModel].list();
    return dataModels;
};

module.exports = listService;