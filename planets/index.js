const server = require("./src/server");
const PORT = 3003;

server.listen(PORT, ()=>{
    console.log(`Planets service listening on port ${PORT}`);
});