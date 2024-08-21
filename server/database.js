const knex = require("knex");
const connection = require("./knexfile");

const db = knex(connection);

module.exports = {
  db,
};
