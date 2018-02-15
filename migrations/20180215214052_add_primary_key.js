
exports.up = function(knex, Promise) {
  return knex.schema.table('lifemilestones', function(table) {
    table.dropColumn('description');
    table.dropColumn('date_acheived');
    table.timestamps('created_at');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lifemilestones');
};
