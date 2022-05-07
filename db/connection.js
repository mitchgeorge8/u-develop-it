const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "&88SG4gQ8j$2",
  database: "election",
});

module.exports = db;
