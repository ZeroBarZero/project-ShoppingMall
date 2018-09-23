var express = require('express');
var passport = require('passport');
var bCrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var models = require('../models');
var nodemailer = require('nodemailer');
var rs = require('randomstring');
var smtpPool = require('nodemailer-smtp-pool')
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
    res.cookie("jwt", token, {httpOnly: true, maxAge: 1000 * 60 * 60 * 24});
    res.send("done.");
  });
});

router.get('/isAuth', passport.authenticate('jwt', { session: false }), function(req, res) {
  if (req.user) res.send(true);
  else res.send(false);
});

router.get('/logout', (req, res) => {
  res.clearCookie("jwt");
  res.send('done.');
});

router.post('/emailVerification', (req, res) => {
  let email = req.body.email;
  _user.findOne({where:{email:email}}).then(user => {
    if (user){
      let smtpTransport = nodemailer.createTransport(smtpPool({
        service: 'Gmail',
        host: 'localhost',
        port: '465',
        tls: {
          rejectUnauthorize: false
        },
        auth: {
          user:'ggamangk@gmail.com',
          pass: '!dongmin15@'
        },
        maxConnection: 5,
        maxMessages: 10
      }));
      var newPassword = rs.generate();

      let mailOptions = {
        from: 'noReply <ifmoon.io@gmail.com>',
        to: email,
        subject: '헬로서울 임시 비밀번호입니다.',
        text: '임시 비밀번호입니다. ' + newPassword
      };
      smtpTransport.sendMail(mailOptions, function(error, info) {
          if(error) console.log(error);
          else console.log('Email sent: ' + info.response);
      });

      crpytPassword = bCrypt.hashSync(newPassword, bCrypt.genSaltSync(8), null);
      _user.update({password: crpytPassword},{where:{email:email}}).then(res => {})
    }
  })
  else{
  
  }

});

module.exports = router;
