//Toss Coin
const discord = require("discord.js")
const connection = require("./database/connection")
async function flip (msg){
  let tentativa = msg.content.split(" ")[1]
  if (tentativa != "cara"&&tentativa != "coroa"){
    msg.channel.send("Você Só pode apostar cara ou coroa.")
  }
  let aposta= msg.content.split(" ")[2]
  if (!aposta){
    msg.channel.send("Você precisa apostar uma Quantia.")
    return
  }
  if(!aposta.match(/^[0-9]+$/)){
    msg.channel.send("Você só pode apostar com números!")
    return
  }
  let carteira = await connection("Principal")
  .where("ID_Discord",msg.author.id).select("PontosAposta").first()
  if (carteira.PontosAposta < aposta){
    msg.channel.send("Você não tem saldo Suficiente.")
    return
  }
  let chute= Math.round(Math.random())
  const mensagem = new discord.MessageEmbed()
  if (chute=== 1){
    if(tentativa == "cara"){
      await connection("Principal").where("ID_Discord",msg.author.id).update({PontosAposta:carteira.PontosAposta + parseInt (aposta)})
    }
    else{
      await connection("Principal").where("ID_Discord",msg.author.id).update({PontosAposta:carteira.PontosAposta - aposta})
    }
    let imagem = new discord.MessageAttachment("./cara-coroa/CARA.png","CARA.png")
    mensagem.setColor("#64FF00").setTitle("Cara")
    .addField(tentativa=="cara"?`Você ganhou ${aposta*2} `:`Você perdeu ${aposta}`,"⠀")
    .attachFiles(imagem)
    .setThumbnail("attachment://CARA.png")
      msg.channel.send(mensagem)
      return
    } if(tentativa == "coroa"){
      await connection("Principal").where("ID_Discord",msg.author.id).update({PontosAposta:carteira.PontosAposta + parseInt(aposta)})
    }
    else{
      await connection("Principal").where("ID_Discord",msg.author.id).update({PontosAposta:carteira.PontosAposta - aposta})
    }
    let imagem = new discord.MessageAttachment("./cara-coroa/COROA.jpg","COROA.jpg")
    mensagem.setColor("#64FF00").setTitle("Coroa")
    .addField(tentativa=="coroa"?`Você ganhou ${aposta*2} `:`Você perdeu ${aposta}`,"⠀")
    .attachFiles(imagem)
    .setThumbnail("attachment://COROA.jpg")
      msg.channel.send(mensagem)  
    }

    module.exports= flip