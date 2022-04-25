const express = require('express')
const userRoute = express.Router()
const {signupUser , loginUser , find} = require('../controllers/userAuthController')

userRoute.get('/',find)
userRoute.post('/signup', signupUser )
userRoute.post('/login', loginUser)


module.exports = userRoute