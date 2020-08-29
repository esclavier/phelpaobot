//UP CONSTROI TABELA INTEIRA
exports.up = function(knex) {
  return knex.schema.createTable("Principal",function(table){
      table.increments("ID").primary()
      table.string("NomeDiscord").notNullable()
      table.string("ID_Discord").notNullable()
      table.string("NomeContaLol").nullable()
      table.integer("PontosAposta").notNullable()
      table.timestamp("Ponto_pego").nullable()
  })
};
//DOWN DESTROI TABELA INTEIRA
exports.down = function(knex) {
  return knex.schema.dropTable("Principal")
};

//knex migrate:latest (Migra pra versão mais ATT.) knex migrate:rollback (Versão Antes database)