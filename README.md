# rest-api

## Installations
- [x] npm init
- [x] express
* npm install --save express
* configuration
  * var express = require('express')
- [x] passport
* npm install --save passport
* configuration
  * var passport = require('passport')
- [x] local-passport
* npm install --save local-passport
* configuration
  * var LocalStrategy = require('passport-local')
- [x] jsonwebtoken
* npm install --save jsonwebtoken
* configuration
  * var jwt = require('jsonwebtoken')
- [x] sequelize
* npm install --save sequelize
* sequelize init
* configuration
  * var sequelize = require('sequelize')
- [x] pg
* npm install --save pg
* configuration on config package.json
{
  "development": {
    "username": "nugraha",
    "password": "nugraha",
    "database": "api_scratch",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}



## rest-api design

Route | HTTP | Description
----- | ---- | -----------
/api/signup | POST | Sign up with new user info
/api/signin | POST |  Sign in while get an access token based on credentials
/api/users | GET | Get all users info (admin only)
/api/users/:id | GET | user single user information (admin and authenticate user)
/api/users | POST | create users admin only
/api/users/:id | DELETE | Delete user (admin only)
/api/users/:id | PUT | Update a user with new info (admin and authenticate user)


## note
> when using npm passport-local change callback result from database to Promise
