// const planets = require("./planets.json");
const axios= require("axios");

module.exports={
    // list: async () => { return planets; },
    list: async () =>{
        const { data } = await axios.get('http://basedatos:3004/Planet'); 
        return data; 
    },
    get: async(id) =>{
        const { data } = await axios.get(`http://basedatos:3004/Planet/${id}`);
        return data; 
    },
    insert: async (body) =>{
        const {data} = await axios.post('http://basedatos:3004/Planet', body);
        return data; 
    }
}