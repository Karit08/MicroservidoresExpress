const mongo = require("mongoose");
const {mongoUri} = require("../utils/envs")

const connect =()=>{
    mongo.connect(mongoUri).then(res=>{
        console.log("Mongo OK");
    });
};

module.exports = connect;