//Discord
const registro = require("./src/registro")
const connection = require("./src/database/connection")
const dotenv = require('dotenv');
if(process.env.NODE_ENV !== 'production')
    dotenv.config();

const { BOT_TOKEN } = process.env;



const axios = require("axios")
const discord = require("discord.js")
const client = new discord.Client ()
const commandhandler = require("./src/commandhandler")
const queue = new Map()

client.on("message",async mensagem =>{
    let existe = await connection("Principal").where("ID_Discord",mensagem.author.id).select("ID_Discord")
    if (!existe[0]){ registro(mensagem)
    }
if (mensagem.content[0]=="!") 
commandhandler(mensagem,queue)
} 
 )

client.login (BOT_TOKEN)