var express = require('express')
var router = express.Router()
var userController = require('../controllers/users-cont.js')


router.post('/signup', userController.create)

module.exports = router
