exports.up = function(knex, Promise) {
  return knex.schema.table('lifemilestones', function(table) {
    table.dropColumn('created_at');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lifemilestones');
};