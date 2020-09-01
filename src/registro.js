const connection = require("./database/connection.js")

async function registro(msg){

await connection("Principal")
.insert({
    NomeDiscord: msg.author.username,
    ID_Discord: msg.author.id,
    PontosAposta: 0,
}) 
}

module.exports = registro
//function armazena os dados, ()=>{} "Arrow Function" só executa.