const express = require('express')
const userRoute = express.Router()



userRoute.get('/signup',(req , res)=>{
    res.status(200).json('this is signup routes')
})


module.exports = userRoute