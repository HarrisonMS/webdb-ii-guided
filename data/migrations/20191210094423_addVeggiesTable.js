// a migration describes the changes to apply to the database
// the up function describes what will be done
exports.up = function(knex) {
  // always return the call to knex schema
  return knex.schema.createTable("veggies", tbl => {
    // primary key, called "id", an integer, auto-increment
    tbl.increments('veggieId')
    //unique is a constraint (rules we define to help protect agains invalid data entering the database)
    tbl.string('name', 180)
        .notNullable()
        .unique()
        .index() // makes searching for vegetables using this column fastser
    tbl.boolean('likeIt').defaultTo(false)

  })
};

// the down function describes how to revert the changes (like undo for the schema)
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("veggies")
};
