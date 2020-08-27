const axios = require("axios")
const discord = require("discord.js")

async function invc (nomeinvc,msg) {
    await axios.get (`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nomeinvc}?api_key=RGAPI-0548e074-c542-41d4-a16a-96a4a368a77a`)
    .then( async res=>{
        let summonerid= res.data.id
        await axios.get (`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerid}?api_key=RGAPI-0548e074-c542-41d4-a16a-96a4a368a77a`)
        .then(res2=>{
           let dados = res2.data
           const mensagem = new discord.MessageEmbed()
           dados.forEach(blocos=>{
              if(blocos.queueType==="RANKED_SOLO_5x5"){
                let imagem = new discord.MessageAttachment(`./ranked-emblems/Emblem_${blocos.tier}.png`,"rank.png")
                mensagem.setColor("#64FF00").setTitle(nomeinvc).setDescription("Status : ").addField("Solo Duo : ",blocos.tier+" "+blocos.rank)
                .addField("PDL : ",blocos.leaguePoints,true)
                .addField("Vitórias : ",blocos.wins,true)
                .addField("Derrotas : ",blocos.losses,true)
                .setThumbnail(`http://ddragon.leagueoflegends.com/cdn/10.16.1/img/profileicon/${res.data.profileIconId}.png`)
                .attachFiles(imagem)
                .setImage("attachment://rank.png")
                msg.channel.send(mensagem)
              }
           })

        })
    })
}
module.exports=invc