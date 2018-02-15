exports.up = function(knex, Promise) {
  return knex.schema.table('lifemilestones', function(table) {
    table.string('description');
    table.date('date_acheived');
    table.dropForeign('id');
    table.integer('famous_person_id');
    table.foreign('famous_person_id').references('id').inTable('famous_people');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lifemilestones');
};