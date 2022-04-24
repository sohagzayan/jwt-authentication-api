const express = require('express')
const app = express()
 require('dotenv').config()
const userRoute = require('./routes/userRoute')
const mongoDbConnection = require('./connections/dbConnection')
const port = process.env.PORT || 6000
mongoDbConnection()

/*  */
app.use('/api/user',userRoute )



app.get('/',(req , res)=>{
    res.status(200).json("hello this iss starting server test route")
})


app.listen(port ,()=>{
    console.log(`server is on..... ${port}`);
})