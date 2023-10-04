const server = require("./src/server");
// const mongo = require("./src/config/connect");

const {Character, Film } = require("./src/database");

// Character.list().then(res=> console.log(res[0]));


server.listen(3004, ()=>{
    console.log("DB service listening on port 3004");
    // mongo();
});