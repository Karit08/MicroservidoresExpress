//3
const {Router} =  require("express");
const controllers = require("../cotrollers");

const router = Router();

router.get("/", controllers.getCharacters);
router.post("/", controllers.createCharacter);


module.exports = router;