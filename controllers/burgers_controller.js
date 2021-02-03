var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var burgerObj = {
            burger: data
        }
        res.render("index", burgerObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.burger_name, function(data) {
        res.json({ id: data.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var id = req.params.id;
    console.log("devoured id: "+id);

    burger.updateOne(id, function(data) {
        if (data.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

module.exports = router;