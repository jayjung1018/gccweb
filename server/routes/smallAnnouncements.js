var express = require('express');
var router = express.Router();
var SmallAnnouncement = require('../models/smallAnnouncement.js');

router.get('/', function(req, res) {
  SmallAnnouncement.find({}, function(err, announcements) {
    res.send(announcements);
  });
})

module.exports = router;
