const mongoose = require('mongoose')
const DB_URL = process.env.MONGODB_URL
require('dotenv').config()

const mongoDbConnection = async()=>{
    try{
        mongoose.connect(DB_URL)
        console.log("connection success with mongoDB");
    }catch(err){
        console.log("db connection failed! something wrong!");
    }

}

module.exports = mongoDbConnection