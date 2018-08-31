
var express = require("express");
var exphbs = require("express-handlebars");
var bodyparser = require("body-parser");
var path = require("path");


var app = express();


app.get("/survey", function(req, res){
   res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});


app.get("/:text", function(req, res){
   res.sendFile(path.join(__dirname, "/app/public/home.html"));
});
