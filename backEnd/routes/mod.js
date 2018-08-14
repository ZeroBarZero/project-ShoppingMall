var express = require('express');
var models = require('../models');
var _product = models.product;
var passport = require('passport');
const SECRET = "s!2r#rcv[eT)";

var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { data: 'Express' });
});

router.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});
/* read p */
router.get('/product', passport.authenticate('jwt', { session: false }), (req, res) =>{
  _product.findAll().then((data) => {
    res.send(data);
  });
});

/* Create p
{
  name,
  category,
  price
}*/
router.post('/product', passport.authenticate('jwt', { session: false }), (req, res) =>{
  const {name, category, price} = req.body;
  var productData = {
    name : name,
    category: category,
    price: price
  }
  _product.create(productData).then((data) => {

  });
  res.redirect('product');
});

/* update p
{
  name,
  category,
  price
}*/
router.put('/product/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  const {name, category, price} = req.body;
  console.log(req);
  _product.update({name: name, category: category, price: price}, {where: {id:req.params.id}}).then((result) => {

  }).catch(function(err) {

  });
  res.redirect('product');
});

/* delete p
{
  id
}*/
router.delete('/product/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  _product.destroy({where: {id:req.params.id}}).then((result) => {

  }).catch(function(err) {

  });
  res.redirect('product');
});

module.exports = router;
