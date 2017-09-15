var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('work', { title: 'Obra - Jorge Augusto Barsoba' });
});

module.exports = router;
