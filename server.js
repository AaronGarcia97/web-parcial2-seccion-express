// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.send("You are on the homepage")
});

app.post("/post", function(req, res) {
  const userObj = req.body;
  res.send(`Welcome ${userObj.user}`);
});

app.delete("/delete", function(req, res) {
  const taskIdObj = req.body
  return res.json({delete: true});
});

app.put("/put/:ID", function(req, res) {
  return res.send(`Task ${req.params.ID} has been updated`);
});

// SERVER
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});