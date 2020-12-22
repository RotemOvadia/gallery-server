var express = require('express');
var router = express.Router();
var images = require('./gallery-feed.json');


/* GET images listing. */
router.get('/', function(req, res, next) {
  res.send(images);
});

module.exports = router;
