const Planet = require("../data");

module.exports = async (req,res) =>{
    const body =  req.body;
    const response = await Planet.insert(body);
    res.status(201).send(response);
}