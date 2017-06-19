var models = require('../models')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

module.exports = {
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
  update: (req, res)=>{
    models.User.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(user=>{
      res.send(user)
    })
  }
}
