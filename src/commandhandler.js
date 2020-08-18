//Comandos
const leaguebot = require("./Leaguebot")
const flip = require("./flip")
const play = require("./play")
const stop = require("./stop")
const skip = require("./skip")
const comandos = require("./comandos")

function caminho (msg,queue)
{
   let mensagem=msg.content.split(" ") 
    switch (mensagem[0]){
        case "!conta" :
            let nome = "" 
            mensagem.shift()
            mensagem.forEach(palavra =>nome=nome+ palavra +" ") 
        leaguebot(nome,msg)
        break
        case "!flip" :
            flip (msg)
            break
        case "!play" :
           let arg = msg.content.split(" ")
           arg.shift()
            play (msg,queue,arg)
            break
        case "!stop" :
            stop(msg,queue)
            break
        case "!skip" :  
            skip(msg,queue)
            break
        case "!comandos" :
            comandos(msg)
            break
     }
}

module.exports= caminho