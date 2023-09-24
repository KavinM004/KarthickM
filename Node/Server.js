const express=require("express");
const mongoose=require("mongoose");
const app=express();
const PORT=3000;
app.get("/",(req,res)=>{
    res.send("hello,Kavin");
});
app.get("/home",(req,res)=>{
    res.send("hello,Kavin-home page");
});
app.get("/login",(req,res)=>{
    res.send("hello,Kavin-Login");
});
app.listen(PORT,()=>{
    console.log("Server is Currently running on localhost :",PORT);
});
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('MongoDB Sever is Connected!'));