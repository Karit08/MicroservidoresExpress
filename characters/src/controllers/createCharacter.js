const Character = require("../data");

module.exports = async (req,res) => {
    const body = req.body;
    const response = await Character.insert(body);
    res.status(201).send(response);
};