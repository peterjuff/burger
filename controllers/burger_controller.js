var burger = require("../models/burger");
var express = require("express");
var app = express();
var router = express.Router();
var PORT = 3000;


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

module.exports = router;