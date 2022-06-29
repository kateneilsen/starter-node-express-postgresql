const knex = require("../db/connection");

function list() {
  return knex("categories").select("*"); //function builds a query tha selects all columns from the categories table
}

module.exports = {
  list,
};
