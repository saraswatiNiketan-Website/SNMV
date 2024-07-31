/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
    return knex.schema.createTable('products', function(table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.decimal('price').notNullable();
        table.integer('quantity').notNullable().defaultTo(0);
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
    return knex.schema.dropTable('products');
};
