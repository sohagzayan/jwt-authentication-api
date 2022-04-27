const mongoose = require('mongoose')

const userAuthSchema = mongoose.Schema({
   name : {
       type : String,
       required : true
   } ,
   username : {
       type : String,
       required : true,
       unique : true
   } ,
   email : {
       type : String,
       required : true
   } ,
   password : {
       type : String,
       required : true
   } ,
   date : {
       type : Date,
      default : Date.now
   } ,
   todos : [
        {
            type : mongoose.Types.ObjectId,
            ref : "Todo"
        }
   ]
})

const User = mongoose.model("User" ,userAuthSchema)

module.exports = User