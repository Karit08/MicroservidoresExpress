const router = require("express").Router();
const {characterInsert, characterList} = require("../controllers");

router.post("/", characterInsert);
router.get("/", characterList);

module.exports  = router;