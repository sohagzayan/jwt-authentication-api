const User = require("../model/userAuthSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Todo = require("../model/todoSchema")
/* 
    all user routes controllers 
*/

/*  test route */

exports.root = (req, res) => {
  res.status(200).json("this is user root route");
};

/* FIND ALL DATA */

exports.find = async (req, res) => {
  try {
    const findAllData = await User.find();
    res.status(200).json(findAllData);
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
};

/* SIGNUP USER */

exports.signupUser = async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
      email: req.body.email,
    });

    await newUser.save();
    await res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

/* login User */

exports.loginUser = async (req, res) => {
  try {
    const user = await User.find({ username: req.body.username });

    if (user && user.length > 0) {
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user[0].password
      );
      if (isPasswordValid) {
        const token = await jwt.sign(
          { username: user[0].username, userId: user[0]._id },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
        res.status(200).json({
          jwt_token: token,
          message: "login SuccessFul YAY!",
        });
      }else{
        res.status(404).json({ err: "authentication fail ! " });
      }
    } else {
      res.status(404).json({ err: "authentication fail ! " });
    }
  } catch (err) {
    res.status(404).json({ err: "authentication fail ! " });
  }
};



/*  todo add */

exports.createTodo = async(req , res)=>{
  try{
    const newTodo =  await Todo({
      ...req.body ,
      user : req.userId
    })
    const updatedTodo = await newTodo.save()
    await User.updateOne({
      _id : req.userId
    },{
      $push : {
        todos : updatedTodo._id
      }
    })
    res.status(200).json(updatedTodo)
  }catch(err){
    res.status(500).json({err : message})
  }
}

exports.getTodo = async(req , res)=>{
  try{
    const todo = await Todo.find().populate("user", "username -_id")
    res.status(200).json(todo)
  }catch(err){
    res.status(500).json({err : message})
  }
}

exports.getAllUser = async (req , res)=>{

  try{
    const user = await User.find().populate("todos")
    res.status(200).json(user)
  }catch(err){
    res.status(500).json({err : err.message})
  }

}