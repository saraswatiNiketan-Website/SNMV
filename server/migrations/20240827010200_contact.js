/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('contact', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.text('email').notNullable();
        table.text('message').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('contact');
  
};
