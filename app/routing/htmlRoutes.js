//Dependancies
const fs = require("fs");
const router = require("express").Router();
const path = require("path");

//Routes
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = router;
