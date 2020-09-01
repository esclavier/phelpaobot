module.exports= (msg,queue)=>{
    const serverqueue = queue.get(msg.guild.id)
    if (!msg.member.voice.channel)
    return msg.channel.send("Você precisa estar num canal de voz para realizar esse comando.")
    serverqueue.songs=[]
    serverqueue.connection.dispatcher.end()
    msg.channel.send("Você parou o bot.")
}