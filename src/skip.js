module.exports= (msg,queue)=> {
    const serverqueue = queue.get(msg.guild.id)
    if (!msg.member.voice.channel)
    return msg.channel.send("Você precisa estar num canal de voz para realizar esse comando.")
    if (!serverqueue)
    return msg.channel.send("Não há músicas para pular.")
    serverqueue.connection.dispatcher.end()
}