const Film = require("../data")

module.exports = async (req,res) =>{
    const body = req.body;
    const response = await Film.insert(body);
    res.status(200).send(response);
}