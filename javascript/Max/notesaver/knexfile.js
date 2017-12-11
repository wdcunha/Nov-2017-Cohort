// Update with your config settings.

const sharedConfig = {
  client: 'postgresql',
  migrations: {
    tableName: 'knex_migrations',
    directory: './db/migrations'
  }
}

module.exports = {

  development: {
    ...sharedConfig,
    connection: {
      database: "notesaver_dev"
    }

  },

  staging: {
    ...sharedConfig,
    connection: {
      database: "notesaver_staging"
    }

  },
  
  production: {
    ...sharedConfig,
    connection: {
      database: "notesaver_prod"
    }
  }
};
