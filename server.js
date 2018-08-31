var express = require("express");
var exphbs = require("express-handlebars");
var bodyparser = require("body-parser");
var path = require("path");


var app = express();


var PORT = process.env.PORT || 8080;

app.use(express.static("app/public"));



app.get("/", function(req, res){
   res.sendFile(path.join(__dirname, "/app/public/home.html"));
});


app.get("/survey", function(req, res){
   res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});


app.get("/:text", function(req, res){
   res.sendFile(path.join(__dirname, "/app/public/home.html"));
});


app.get("/api/friends", function(req, res){
   res.sendFile(path.join(__dirname, "/app/data/friends.js"));
});



app.post("/api/friends", function(req, res){
   var match = req.body
});




app.listen(PORT, function(){
   console.log("Server listening on: http://localhost:" + PORT);
});