const connection = require("./database/connection")
const discord = require("discord.js")
module.exports = async function pontos(msg) {
    const mensagem = new discord.MessageEmbed()
    let imagem = new discord.MessageAttachment("./pontos_icone/PONTOS.png")
    let pontos = await connection("Principal")
    .where("ID_Discord",msg.author.id).select("PontosAposta").first()
    mensagem.setColor("#64FF00").setTitle("Pontos Aposta:")
    .setDescription(`Você tem ${pontos.PontosAposta} pontos! `)
    .attachFiles(imagem)
    .setThumbnail("attachment://PONTOS.png")
    msg.channel.send(mensagem)
}