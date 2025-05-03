const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email:{type:String ,unique:true},
    password:String
})

const todoSchema = new Schema({
    title: String,
    description: String,
    completed:Boolean,
    userId:ObjectId
})

const userModel = mongoose.model("user", userSchema);
const todoModel = mongoose.model("todo", todoSchema);

module.exports={
    userModel: userModel,
    todoModel: todoModel
}