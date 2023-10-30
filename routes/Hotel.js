var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Hotel', { title: 'Search Results Hotel' });
});

module.exports = router;
