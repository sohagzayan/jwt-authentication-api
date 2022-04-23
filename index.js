const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 6000


app.get('/',(req , res)=>{
    res.status(200).json("hello this iss starting server test route")
})


app.listen(port ,()=>{
    console.log(`server is on..... ${port}`);
})