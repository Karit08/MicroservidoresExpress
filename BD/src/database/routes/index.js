const { Router } = require("express");
const store = require("../index");
const { validateModel } = require("../middlewares");

const router = Router();

router.get("/:model", validateModel , async (req, res) => {
    const {model} = req.params;
    const response = await store[model].list();
    res.status(200).json(response);
});

router.get("/:model/:id", validateModel , async (req, res) => {
    const {model, id} = req.params;
    const response = await store[model].get(id);
    res.status(200).json(response);
});

router.post("/:model", validateModel , async (req, res) => {
    const {model} = req.params;
    const body = req.body;
    const response = await store[model].insert({...body});
    res.status(200).json(response);
});

// router.get("/character", async (req, res)=>{
//     const response  = await Character.list();
//     res.status(200).json(response);
// });


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
