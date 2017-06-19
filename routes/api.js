var express = require('express')
var router = express.Router()
var userController = require('../controllers/users-cont.js')
var passport = require('passport')
var helper = require('../helpers/jwtVerify.js')


router.post('/signup', userController.signup)
router.post('/signin', passport.authenticate('local', {session: false}), userController.signin)
router.get('/', helper.jwtVerifyAdmin, userController.read)
router.get('/:id', helper.jwtVerifyAdminAndUser, userController.readOne)
router.post('/', helper.jwtVerifyAdmin, userController.create)
router.delete('/:id', helper.jwtVerifyAdmin, userController.deleteUser)
router.put('/:id', helper.jwtVerifyAdminAndUser, userController.update)

module.exports = router
