const connection = require("./database/connection")
module.exports = async function gratis(msg){ 
    let tempo = Date.now() 
    let ultimo = await connection("Principal").where("ID_Discord",msg.author.id).select("Ponto_pego").first()
    if(ultimo.Ponto_pego){
    let dif = Math.abs(ultimo.Ponto_pego - tempo)/60000/60
    if(dif < 1){
        msg.channel.send(`Ainda faltam ${Math.floor(Math.abs(dif-1)*60)} minutos!`)
        return
    }
}
    const saldo = await connection("Principal")
    .where("ID_Discord",msg.author.id).select("PontosAposta").first()
    await connection("Principal").where("ID_Discord",msg.author.id).update({PontosAposta:saldo.PontosAposta + 100})
    await connection("Principal").where("ID_Discord",msg.author.id).update({Ponto_pego: tempo})
    msg.channel.send("Você resgatou suas 100 moedas!")

}