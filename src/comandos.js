const discord = require("discord.js")
module.exports=(msg)=>{
    const mensagem = new discord.MessageEmbed()
    mensagem.setColor("#64FF00").setTitle("Lista de Comandos:")
    .addField("!play", "Inicia Música")
    .addField("!stop", "Encerra Música")
    .addField("!skip", "Passa de Música")
    .addField("!conta","Sua conta no Lol")
    .addField("!flip", "cara ou coroa + pontos que quer apostar.")
    .addField("!sefoder", "Manda o Becha se foder")
    .addField("!coins", "Pega à cada 1 Hora, 100 pontos.")
    .addField("!pontos", "Pontos que você tem.")
    msg.channel.send(mensagem)
}