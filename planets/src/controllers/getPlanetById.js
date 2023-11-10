const Planet = require("../data");

module.exports = async(req, res) =>{
    const {id} = req.params;
    const planet = await Planet.get(id);
    res.status(200).json(planet);
}