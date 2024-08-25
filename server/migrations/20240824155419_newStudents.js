/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("newAdmission", table => {
        table.increments("id").primary();
        table.string('studentName').notNullable();
        table.date('dob').notNullable();
        table.string('gender').notNullable();
        table.string('bloodGroup').notNullable();
        table.string('religion').notNullable();
        table.string('nationality').notNullable();
        table.text('otherInformation');
        table.string('admissionFor').notNullable();
        table.string('previousSchool');
        table.string('fatherName').notNullable();
        table.string('fatherContact').notNullable();
        table.string('motherName').notNullable();
        table.string('motherContact').notNullable();
        table.string('guardianName').notNullable();
        table.string('guardianContact').notNullable();
        table.string('guardianRelation').notNullable();
        table.timestamp('submittedAt').defaultTo(knex.fn.now());
        
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('newAdmission');
};
