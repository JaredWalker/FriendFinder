

app.get("/api/friends", function(req, res){
  res.sendFile(path.join(__dirname, "/app/data/friends.js"));
});



app.post("/api/friends", userData, function(data) {

  
  $("#match-name").text(data.name);
  $("#match-img").attr("src", data.photo);

  
  $("#results-modal").modal("toggle");

});
