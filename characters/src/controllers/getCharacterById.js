const Character = require("../data");

module.exports = async (req, res)=>{
    const {id} = req.params;
    // console.log(id);
    const character = await Character.get(id);
    res.status(200).json(character);
}