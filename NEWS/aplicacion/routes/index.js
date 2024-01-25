var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Primera pagina con NodeJS',autor:"Jonathan"});
});

module.exports = router;
