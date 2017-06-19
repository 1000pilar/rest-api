var express = require('express')
var passport = require('passport')
var LocalStrategy = require('passport-local')
var bodyParser = require('body-parser')
var User = require('./models/user.js')
var bcrypt = require('bcrypt')

var users = require('./routes/api.js')

var app = express()

passport.use(new LocalStrategy(
  function(username, password, done){
    User.findOne({ username: username }, function (err, user){
      if (err) {return done(err)}
      if (!user) {return done(null, {message: `username or password invalid`})}
      if (!bcrypt.compareSync(password, user.password)) {return done(null, {message: `username or password invalid`})}
    })
  }
))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api/users', users)

app.listen(3000)
console.log(`Connect to port 3000`);
