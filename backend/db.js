const mysql = require("mysql2");

const databaseConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
};

const dbConnection = mysql.createConnection({
  ...databaseConfig,
  database: "",
});

dbConnection.query(
  "CREATE DATABASE IF NOT EXISTS event_administration",
  function (err) {
    if (err) throw err;
    console.log("Database event_administration created");

    dbConnection.query("USE event_administration", (err) => {
      if (err) throw err;

      const administratorsTableQuery = `
      CREATE TABLE IF NOT EXISTS administrators (
        id INT NOT NULL AUTO_INCREMENT,
        email VARCHAR(100) NOT NULL,
        name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        password VARCHAR(100) NOT NULL,
        primary key (id)
      )
      `;

      dbConnection.query(administratorsTableQuery, (err) => {
        if (err) throw err;
        console.log("administrators table created");
      });
    });
  }
);

module.exports = {
  dbConnection,
};
