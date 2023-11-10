const Film = require("../data");

module.exports = async (req, res)=>{
    const {id} = req.params;
    const film = await Film.get(id);
    res.status(200).json(film);
}