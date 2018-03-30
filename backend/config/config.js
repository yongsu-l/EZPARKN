// config.js

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: 'data/dev-db.sqlite3',
    secretOrKey: 'parknsoez',
    define: {
      timestamps: false
    },
    operatorsAliases: false,
    logging: false
  },
  test: {
    dialect: 'sqlite',
    storage: 'data/test-db.sqlite3',
    secretOrKey: 'parknsoez',
    define: {
      timestamps: false
    },
    operatorsAliases: false,
    logging: false
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host:     process.env.DB_HOSTNAME,
    dialect: 'mysql'
  }
};

