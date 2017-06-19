var jwt = require('jsonwebtoken')
require('dotenv').config()


module.exports = {
  jwtVerifyAdmin: (req, res, next)=>{
    jwt.verify(req.headers.token, process.env.SECRET, (err, decoded)=>{
      if(decoded.role === undefined) {
        res.send({message: `your not authorize to read,create,update,delete user`})
      } else if (decoded.role == 'admin'){
        next()
      } else {
        res.send({message: `your not authorize admin or user`})
      }
    })
  },
  jwtVerifyAdminAndUser: (req, res, next)=>{
    jwt.verify(req.headers.token, process.env.SECRET, (err, decoded)=>{
      if(decoded.role === undefined) {
        res.send({message: `your not authorize to read,create,update,delete user`})
      } else if (decoded.role == 'admin' || decoded.role == 'user') {
        next()
      } else {
        res.send({message: `your not authorize admin or user`})
      }
    })
  }
}
