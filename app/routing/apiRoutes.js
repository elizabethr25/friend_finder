//Dependancies 
// const fs = require("fs");
const router = require("express").Router();
const path = require("path");
const friends = require("../data/friends")

//Display all friends 
router.get("/api/friends", function(req, res) {
    return res.json(friends);
});

module.exports = router;