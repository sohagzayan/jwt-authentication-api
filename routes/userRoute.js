const express = require('express')
const userRoute = express.Router()
const {signupUser , loginUser , getAllUser, find , createTodo ,getTodo} = require('../controllers/userAuthController')
const loginChecking =  require('../middlewares/loginChecking')



userRoute.get('/',find)
userRoute.post('/signup', signupUser )
userRoute.post('/login', loginUser)
userRoute.post('/todo', loginChecking, createTodo )
userRoute.get('/todo', loginChecking, getTodo )
userRoute.get('/getAllUser', loginChecking, getAllUser)

module.exports = userRoute