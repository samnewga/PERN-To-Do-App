const Pool = require("pg").Pool;

const pool = new Pool({
  //replace with postgresql user
  user: "USER",
  //replace with postgresql password
  password: "PASSWORD",
  host: "localhost",
  port: 5432,
  //replace with postgresql database
  database: "DATABASE",
});

module.exports = pool;
