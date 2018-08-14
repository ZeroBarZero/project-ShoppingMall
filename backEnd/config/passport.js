var passport = require('passport');
var bCrypt = require('bcrypt');
var localStrategy = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var models = require('../models');
const SECRET = "s!2r#rcv[eT)";
var _user = models.user;

var cookieExtractor = function(req) {
    var token = null;
    if (req && req.cookies)
    {
        token = req.cookies["jwt"];
    }
    return token;
};

module.exports = (passport) => {
  passport.use('localSignup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  }, (req, username, password, done) => {
    _user.findOne({where:{email:username}}).then(function(user){
      if (user){
        return done(null, false, {'message': '존재하는 아이디입니다.'});
      }
      else{
        var cryptPassword = bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        var userData = {
          email: username,
          password: cryptPassword
        };
        _user.create(userData).then((newUser, created) => {
          if(!newUser) return done(null, false);
          else return done(null, newUser);
        })
      }
    })
  }));

  passport.use(new JwtStrategy({
  jwtFromRequest: req => cookieExtractor(req),
  secretOrKey: SECRET
}, (payload, next) => {
  _user.findOne({where:{id:payload.id}}).then((user) => {
    if (payload.id !== user.id) {
      next(null, false);
    } else {
      next(null, user);
    }
  });
}));
}
