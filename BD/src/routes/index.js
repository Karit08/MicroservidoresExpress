const router = require("express").Router();
const fileSystem = require("fs");
// const { dirname } = require("path");

const path = __dirname;

const removeExtend = (fileName) =>{
    return fileName.split(".").shift();
};

fileSystem.readdirSync(path).filter(fileName=>{
    const name = removeExtend(fileName);
    console.log(name); 
    if(name !== "index"){ router.use(`/${name}`, require(`./${fileName}`))}
});

module.exports= router;
