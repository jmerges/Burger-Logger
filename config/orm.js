const connection = require("./connection.js");
var connction = require("./connection.js");

var orm = {
    selectAll: function(cb) {
        queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(val, cb) {
        queryString = "INSERT INTO burgers (burger_name)";
        queryString += " VALUES ";
        queryString+= "("+val+")";

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}