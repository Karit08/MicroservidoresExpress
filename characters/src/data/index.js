// const character = require("./characters.json");
const axios = require("axios");

module.exports={
    // list: async () => { return character; },
    list: async () =>{
        const { data } = await axios.get('http://basedatos:3004/Character'); //basedatos es el contenedor de Docker
        // const { data } = await axios.get('http://localhost:3004/Character');
        // return await fetch('http://localhost:3004/Character').then(res => res.json());
        return data; 
    },
    get: async(id) =>{
        const { data } = await axios.get(`http://basedatos:3004/Character/${id}`);
        // const { data } = await axios.get(`http://localhost:3004/Character/${id}`);
        return data; 
    },
    insert: async (body) =>{
        const {data} = await axios.post('http://basedatos:3004/Character', body);
        // const {data} = await axios.post('http://localhost:3004/Character', body);
        return data; 
    }
}