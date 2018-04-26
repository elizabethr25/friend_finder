//Dependancies
// const fs = require("fs");
var path = require("path");
var friends = require("../data/friends.js");

//Export API Route
module.exports = function(app) {
  console.log("__ENTER apiRoutes.js");

  //Total list of friends entries
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  //Add a new friend entry
  app.post("/api/friends", function(req, res) {
    var userInput = req.body;
    var userResponses = userInput.scores;

    //Matching Friend Code
    var matchName = "";
    var matchImage = "";
    var totalDifference = 100000;

    //Loop through all existing friends
    for (var i = 0; i < friends.length; i++) {
      var diff = 0;
      console.log(userInput)
      for (var k = 0; k < userInput.length; k++) {
        diff += Math.abs(friends[i].scores[k] - userResponses[k]);
      }
      if (diff < totalDifference) {
        totalDifference = diff;
        matchName = friends[i].name;
        matchImage = friends[i].photo;
      }
    }
    // Add new user
    friends.push(userInput);

    // Send response
    res.json({ status: "OK", matchName: matchName, matchImage: matchImage });
  });
};
