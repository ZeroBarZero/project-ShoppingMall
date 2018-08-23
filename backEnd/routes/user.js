var express = require('express');
var passport = require('passport');
var bCrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var models = require('../models');
var _user = models.user;
const SECRET = "s!2r#rcv[eT)";

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});

/*
POST /signup
{
  email,
  password
}
*/
router.post('/signup', passport.authenticate('localSignup', {session:false}),function(req, res, next) {
  res.json({
    message: 'Signup successful',
    user: req.user
  });
});

/*
POST /login
{
  email,
  password
}
*/
router.post('/login', (req,res) => {
  const {email, password} = req.body; // req.body
  _user.findOne({where:{email:email}}).then((user) => {
    if(!user || !bCrypt.compareSync(password, user.password)){
      res.send("sry.");
    }
    const token = jwt.sign({id:user.id, email:user.email, isVerificated:user.isVerificated}, SECRET, {expiresIn:'1d'});
    res.cookie("jwt", token, {httpOnly: true, maxAge: 1000 * 60 * 30});
    res.send("done.");
  });
});



module.exports = router;
