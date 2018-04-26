// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/app/public')));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the application routes
require(path.join(__dirname, "/app/routing/apiRoutes"))(app);
require(path.join(__dirname, "/app/routing/htmlRoutes"))(app);


// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

