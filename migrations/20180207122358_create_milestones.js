

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('milestones', function(table){
      table.increments();
      table.string('description');
      table.date('date_acheived');
    })
  ])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('milestones');
};
