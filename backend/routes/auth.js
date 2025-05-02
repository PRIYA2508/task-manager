const express = require("express");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "BHUNGI"
const {userModel} = require("../db/db");

authRouter.post("/signup" ,async function(req,res){
const {firstName,lastName,email,password} = req.body;

try{
    await userModel.create({
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password
    })
         res.json({
            message: "Succesfully created Sign-up page"
         })
}
catch(error){
  res.status(403).json({
    message:"Incorrect Credentials",
    error:error.message
  })
}
});

authRouter.post("/signin" , function(req,res){
  const {firstName,lastName,email,password} = req.body;

  const user = userModel.findOne({
    email,
    password
  })
  if(user){
    const token = jwt.sign({
      id : user._id
    },JWT_USER_PASSWORD)

    res.json({
      token:token
    })
  }
  else{
    res.json({
      message: "Incorrect Credetials"
    })
  }
 

});

module.exports = {
    authRouter:authRouter
}
