/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('events', table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.text('content').notNullable();
        table.text('image1').notNullable();
        table.text('image2').notNullable();
        table.text('image3').notNullable();
        table.text('image4').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('events');
  
};
