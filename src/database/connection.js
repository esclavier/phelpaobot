const knex = require("knex")
const configuration = require("../../knexfile")

//Usar module exports = connection pra todo codigo q precisar puxar coisa do banco de dados

const connection = knex(configuration.development)
module.exports = connection