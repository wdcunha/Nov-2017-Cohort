
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', table => {
    table.increments('id');
    table.string('username');
    table.string('title');
    table.text('notes');
    table.timestamps(false, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
