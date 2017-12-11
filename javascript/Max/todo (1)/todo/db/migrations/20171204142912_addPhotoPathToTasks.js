
exports.up = function(knex, Promise) {
  return knex.schema.table('tasks', table => {
    table.string('photo_path');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('tasks', table => {
    table.dropColumn('photo_path');
  });
};
