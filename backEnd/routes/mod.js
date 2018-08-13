var express = require('express');
var models = require('../models');
var _product = models.product;
var passport = require('passport');
const SECRET = "s!2r#rcv[eT)";

var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { data: 'Express' });
});
/* read p */
router.get('/product', passport.authenticate('jwt', { session: false }), (req, res) =>{
  _product.findAll().then((data) => {
    res.sender(data);
  });
});
/* Create p */
/* update p */
/* delete p */
module.exports = router;
