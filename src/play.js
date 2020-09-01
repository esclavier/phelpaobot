//Play Music
const ytdl = require("ytdl-core")
const ytsr = require("ytsr")

module.exports= async (msg,queue,args)=>{

    function play(guild,music){
        const serverqueue = queue.get(msg.guild.id)
        if (!music){
            serverqueue.voiceChannel.leave()
            queue.delete(guild.id)
            return        
        }
        const dispatcher = serverqueue.connection
        .play(ytdl(music.url))
        .on("finish",()=>{
            serverqueue.songs.shift()
            play(guild,serverqueue.songs[0])
        }) .on("error",error=>console.log(error))
        dispatcher.setVolumeLogarithmic(serverqueue.volume/5)
        serverqueue.textChannel.send(`Tocando **${music.title}**`)
    }
    const voiceChannel = msg.member.voice.channel
    if (!voiceChannel)
    return msg.channel.send("Você precisa estar em um Canal de Voz para usar esse comando.")
    let songname = " "
    for(let m of args){
        songname+=m+" "
    }
    const serverqueue = queue.get(msg.guild.id)
    const musica = await ytsr (songname,{limit: 1})
    const music = {
        title: musica.items[0].title,
        url: String(musica.items[0].link)
    }
    if (!serverqueue) {
        const queueconstruct = {
            textChannel: msg.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [], 
            volume: 5,
            playing: true
        }
        queue.set(msg.guild.id,queueconstruct)
        queueconstruct.songs.push(music)
        try{
            var connection= await voiceChannel.join()
            queueconstruct.connection=connection
            play(msg.guild,queueconstruct.songs[0])
        } catch(error){
            console.log(error)
            queue.delete(msg.guild.id)
            return msg.channel.send(error)
        }
    } else {
        serverqueue.songs.push(music)
        return msg.channel.send(`${music.title} foi Adicionado a fila.`)
    }
}