const { userMiddleware } = require("../middleware/todo");
const {todoModel} = require("../db/db")
const express = require("express");
const todoRouter = express.Router(); 

todoRouter.post("/addtask",userMiddleware,async function(req,res){
const {title,description} = req.body;
const todo = await todoModel.create({
    title,
    description,
    userId: req.userId
})
if(todo){
    res.json({
        message: "Task added",
        todoId:todo._id,

    })
}
else{
    res.status(403).json({
        message: "sign-in not done"
    })
}

});
todoRouter.put("/update/task",userMiddleware, async function(req,res){
const userId = req.userId;
const {title , description,todoId} = req.body;
const todo = await todoModel.updateOne({
    _id:todoId,
    userId:userId,
},{
    title,
    description
});

res.json({
    message: "course updated",
    todoId: todoId._id
})

})
todoRouter.delete("/delete/task" , function(req,res){
    
})
todoRouter.post("/show/list", function(req,res){

})

module.exports = {
    todoRouter: todoRouter
}