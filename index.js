//Discord
const axios = require("axios")
const id = require("./id.json")
const discord = require("discord.js")
const client = new discord.Client ()
const commandhandler = require("./src/commandhandler")
const queue = new Map()

client.on("message", mensagem =>{

if (mensagem.content[0]=="!") 
commandhandler(mensagem,queue)
} 
 )

client.login ("NzQ0NjI1NzEwOTQwOTQ2NTM0.Xzl8uw.kklzex7pW0WN12F3-coCDz3Wbuk")