var express = require('express')
var router = express.Router()
var userController = require('../controllers/users-cont.js')


router.post('/signup', userController.create)
router.get('/', userController.read)
router.put('/:id', userController.update)

module.exports = router
