var jwt = require('jsonwebtoken')


module.exports = {
  jwtVerifyAdmin: (req, res, next)=>{
    jwt.veryfy(req.headers.token, 'rahasia', (err, decoded)=>{
      if(decoded.role == 'admin') {
        next()
      } else {
        res.send({message: `your not authorize to read,create,update,delete user`})
      }
    })
  },
  jwtVerifyAdminAndUser: (req, res, next)=>{
    jwt.veryfy(req.headers.token, 'rahasia', (err, decoded)=>{
      if(decoded.role == 'admin' || decoded.id == req.params.id) {
        next()
      } else {
        res.send({message: `your not make changes`})
      }
    })
  }
}
