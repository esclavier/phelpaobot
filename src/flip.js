//Toss Coin
const discord = require("discord.js")
function flip (msg){
  let chute= Math.round(Math.random())
  const mensagem = new discord.MessageEmbed()
  if (chute=== 1){
    let imagem = new discord.MessageAttachment("./cara-coroa/CARA.png","CARA.png")
    mensagem.setColor("#64FF00").setTitle("Cara")
    .attachFiles(imagem)
    .setThumbnail("attachment://CARA.png")
      msg.channel.send(mensagem)
      return
    } 
    let imagem = new discord.MessageAttachment("./cara-coroa/COROA.jpg","COROA.jpg")
    mensagem.setColor("#64FF00").setTitle("Coroa")
    .attachFiles(imagem)
    .setThumbnail("attachment://COROA.jpg")
      msg.channel.send(mensagem)  
    }

    module.exports= flip