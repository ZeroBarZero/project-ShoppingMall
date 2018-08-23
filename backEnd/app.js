var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var modRouter = require('./routes/mod');

var app = express();
app.set('views', path.join(__dirname,'views'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const models = require('./models');
models.sequelize.sync()
  .then(() => {
    console.log('✓ DB connection success.');
    console.log('  Press CTRL-C to stop\n');
  })
  .catch(err => {
    console.error(err);
    console.log('✗ DB connection error. Please make sure DB is running.');
    process.exit();
  });

require('./config/passport.js')(passport);
app.use(passport.initialize());
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/api/user', usersRouter);
app.use('/api/mod', modRouter);


module.exports = app;
