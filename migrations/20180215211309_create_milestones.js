
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lifemilestones', function(table) {
    table.increments('id').primary();
    table.string('description');
    table.date('date_acheived');
    table.foreign('id').references('id').inTable('famous_people');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lifemilestones');
};
