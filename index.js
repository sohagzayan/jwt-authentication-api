const express = require("express");
const app = express();
require("dotenv").config();
const userRoute = require("./routes/userRoute");
const mongoDbConnection = require("./connections/dbConnection");
const bodyParser = require('body-parser')
const checkLogin   = require('./middlewares/loginChecking')
/* port */
const port = process.env.PORT || 5000;

/* mongoDB connection */
mongoDbConnection();

/* middleware */
app.use(bodyParser.json())
app.use("/api/user", userRoute);

/* main routes */
app.get("/",  (req, res) => {
  res.status(200).json("hello this iss starting server test route");
});

/* start server */
app.listen(port, () => {
  console.log(`server is on..... ${port}`);
});
