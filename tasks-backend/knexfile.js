// Update with your config settings.

module.exports = {
  client: 'pg',
   connection: {
    database: 'tasks',
    user:     'postgres',
    password: 's1mples'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
