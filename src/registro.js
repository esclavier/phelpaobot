const connection = require("./database/connection.js")

async function registro(msg){
    let existe = await connection("Principal").where("ID_Discord",msg.author.id).select("ID_Discord")
    if (existe[0]){
        msg.channel.send("Você já está registrado!")
        return;
    }
await connection("Principal")
.insert({
    NomeDiscord: msg.author.username,
    ID_Discord: msg.author.id,
    PontosAposta: 0,
}) .then(()=>{
    msg.channel.send("Registro Completo!")
})
}

module.exports = registro
//function armazena os dados, ()=>{} "Arrow Function" só executa.