exports.up = function(knex) {
    return knex.schema.createTable('cars', table => {
    
      table.increments('id') 
      table.text('vin', 128).unique().notNullable()
      table.text('make', 128).notNullable()
      table.text('model', 128).notNullable()
      table.integer('mileage').notNullable()
      table.text('title').defaultTo(0)
      table.text('transmission').defaultTo(0)
    })
  }
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
  }