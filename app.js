var express = require('express')
var passport = require('passport')
var LocalStrategy = require('passport-local')
var bodyParser = require('body-parser')
var models = require('./models')
var bcrypt = require('bcrypt')

var users = require('./routes/api.js')

var app = express()

passport.use(new LocalStrategy(
  function(username, password, done){
    // console.log(username);
    // console.log(password);
    models.User.findOne({ where: {username: username }})
    .then((user)=>{
      console.log(user.dataValues);
      if (!user.dataValues) {return done(null, {message: `username or password invalid`})}
      // console.log(user.dataValues.password);
      // console.log(!bcrypt.compareSync(password, user.dataValues.password));
      if (!bcrypt.compareSync(password, user.dataValues.password)) {return done(null, {message: `password invalid`})}
      return done(null, user);
    })
  }
))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api/users', users)

app.listen(3000)
console.log(`Connect to port 3000`);
