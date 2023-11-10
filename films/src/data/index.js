// const films = require("./films.json");
const axios = require("axios")

module.exports={
    list: async () => { 
        // const { data } = await axios.get(`http://localhost:3004/Film`);
        const { data } = await axios.get('http://basedatos:3004/Film');
        return data;  
    },
    get: async(id) => {
        const { data } = await axios.get(`http://basedatos:3004/Film/${id}`);
        return data; 
    },
    insert: async(body) =>{
        const { data } = await axios.post(`http://basedatos:3004/Film`, body);
        return data; 
    }
}