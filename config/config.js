module.exports = {
  development: {
    username: process.env.MySQL_User,
    password: process.env.MySQL_Pass,
    database: process.env.MySQL_DB,
    host: process.env.MySQL_Host,
    dialect: "mysql",
    operatorsAliases: false
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql",
    operatorsAliases: false
  }
};
