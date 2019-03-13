var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
	var recup = req.param("nom_ville");
  res.render('ville', { villes: recup });
console.log('recup');
});

module.exports = router;

