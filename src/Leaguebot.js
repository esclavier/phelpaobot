async function invc (nomeinvc,msg) {
    await axios.get (`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nomeinvc}?api_key=${id.api}`)
    .then( async res=>{
        let summonerid= res.data.id
        await axios.get (`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerid}?api_key=${id.api}`)
        .then(res2=>{
           let dados = res2.data
           let mensagem 
           dados.forEach(blocos=>{
              if(blocos.queueType==="RANKED_SOLO_5x5"){
                mensagem="Solo Duo: "+  blocos.tier+" "+blocos.rank+" PDL: "+blocos.leaguePoints+" Vitórias: "+blocos.wins+
               " Derrotas: "+ blocos.losses
                msg.channel.send(mensagem)
              }
           })

        })
    })
}
module.exports=invc