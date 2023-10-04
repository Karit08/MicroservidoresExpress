const { Router } = require("express");
const { Character } = require("../database");

const router  = Router();

router.get("/character", async (req, res)=>{
    const response  = await Character.list();
    res.status(200).json(response);
});

module.exports = router; 





















// Prueba de rutas dinamicas-------------------------------------------------------
// const router = require("express").Router();
// const fileSystem = require("fs");
// // const { dirname } = require("path");

// const path = __dirname;

// const removeExtend = (fileName) =>{
//     return fileName.split(".").shift();
// };

// fileSystem.readdirSync(path).filter(fileName=>{
//     const name = removeExtend(fileName);
//     console.log(name); 
//     if(name !== "index"){ router.use(`/${name}`, require(`./${fileName}`))}
// });

// module.exports= router;
