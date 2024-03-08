const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "drugs_db",
    password: "12345",
    port: 5432,
});

module.exports = pool;