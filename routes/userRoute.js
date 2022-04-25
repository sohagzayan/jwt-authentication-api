const express = require('express')
const userRoute = express.Router()
const {signupUser , loginUser , find , createTodo} = require('../controllers/userAuthController')

userRoute.get('/',find)
userRoute.post('/signup', signupUser )
userRoute.post('/login', loginUser)
userRoute.post('/todo', createTodo )

module.exports = userRoute