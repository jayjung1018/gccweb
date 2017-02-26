var express = require('express');
var router = express.Router();
var MemoryVerse = require('../models/memoryVerse.js');

router.get('/', function(req, res) {
  MemoryVerse.find({}, function(err, verses) {
    res.send(verses);
  });
});

module.exports = router;
