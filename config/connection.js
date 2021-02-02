var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"password",
    port: 3306
});

module.exports = connection;