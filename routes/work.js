const paintingsFolder = './public/images/paintings';
const fs = require('fs');

var paintings = [];

fs.readdirSync(paintingsFolder).forEach(file => {
  paintings.push(file);
})

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('work', { title: 'Obra - Jorge Augusto Barsoba', paintings: paintings });
});

module.exports = router;
