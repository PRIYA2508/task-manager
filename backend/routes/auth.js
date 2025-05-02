const express = require("express");
const authRouter = express.Router();
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

});

module.exports = {
    authRouter:authRouter
}
