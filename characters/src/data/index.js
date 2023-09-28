const character = require("./characters.json");

module.exports={
    list: async () => { return character; },
    // list: async ()=>{
    //     const res = await fetch('http://localhost:3004/character')
    //     const {data} = await res.json();
    //     return data; 
    // }
}