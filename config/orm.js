const connection = require("./connection.js");
var connction = require("./connection.js");

var orm = {
    selectAll: function(table, cb) {
        queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}