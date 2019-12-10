// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true, // only needed when using SQLite3
    connection: {
      filename: './data/produce.db3' // where is the database file?
    },
    migrations: {
      directory: './data/migrations' // will be created automatically
    },
    seeds: {
      directory: './data/migrations'// will also be created automatically
    }
  },
};
