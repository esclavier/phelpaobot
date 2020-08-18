//Discord
const dotenv = require('dotenv');
if(process.env.NODE_ENV !== 'production')
    dotenv.config();

const { BOT_TOKEN } = process.env;



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

client.login (BOT_TOKEN)