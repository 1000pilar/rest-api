var models = require('../models')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

module.exports = {
  signup : (req, res) =>{
    models.User.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      role: req.body.role || 'member'
    })
    .then((user)=>{
      res.send(user)
    })
    .catch((err)=>{
      res.send(err)
    })
  },
  signin: (req, res)=>{
    var user = req.user
    console.log(user);
    if(user.hasOwnProperty('message')){
      res.send(user)
    } else {
      var token = jwt.sign({
        name: user.name,
        id: user.id,
        role: user.role
      }, 'rahasia', { expiresIn: '1d'})
      res.send(token)
    }
  },
  read: (req, res)=>{
    models.User.findAll()
    .then((users)=>{
      res.send(users)
    })
    .catch((err)=>{
      res.send(err)
    })
  },
  readOne: (req, res)=>{
    models.User.findOne(body.params.id)
    .then((users)=>{
      res.send(users)
    })
    .catch((err)=>{
      res.send(err)
    })
  },
  update: (req, res)=>{
    models.User.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(userId=>{
      res.send(userId)
    })
    .catch((err)=>{
      res.send(err)
    })
  },
  deleteUser: (req, res)=>{
    models.User.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(()=>{
      res.send(`delete user id ${req.params.id} succed`)
    })
    .catch(err=>{
      res.send(err)
    })
  },
  create : (req, res) =>{
    models.User.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      role: req.body.role || 'member'
    })
    .then((user)=>{
      res.send(user)
    })
    .catch((err)=>{
      res.send(err)
    })
  }
}
