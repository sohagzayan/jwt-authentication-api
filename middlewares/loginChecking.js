const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const checkLogin = (req , res, next)=>{
    const {authorization} = req.headers
    console.log(authorization);
    try{
        const token = authorization.split(' ')[1]
        console.log("iam atry");
        const decoded =  jwt.verify(token, process.env.JWT_SECRET)
        const {username , userId} = decoded
        req.username = username
        req.userId = userId
        next()
    }catch(err){
       next("authentication failure ! ops")
    }
}

module.exports = checkLogin