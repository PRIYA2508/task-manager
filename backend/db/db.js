const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.objectId;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email:{type:String ,unique:true},
    password:String
})

const userModel = mongoose.model("user", userSchema);

module.exports={
    userModel: userModel
}