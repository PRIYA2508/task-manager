const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {authRouter} = require("./routes/auth");
const {todoRouter} = require("./routes/todo");


app.use(express.json());
app.use("/auth", authRouter);
app.use("/todo", todoRouter);

async function main(){
    await mongoose.connect("mongodb+srv://siserjuliet31:ShowPassword@cluster0.sqijbpl.mongodb.net/todo-app");
    console.log("connected to database");
    app.listen(3000);
}

main();
