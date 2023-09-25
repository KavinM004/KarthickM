const express=require("express");
const mongoose=require("mongoose");
const app=express();
const Port=4000;
app.listen(Port,()=>{
    console.log("Server is running on :",Port)
});
app.get('/',(req,res)=>{
    res.send("Hi!Welcome Api!...")
});
app.get('/home',(req,res)=>{
    res.send("Hi!Welcome to Home Page From Kavin!...")
});
app.get('/login',(req,res)=>{
    res.send("Hi!Welcome to Login Page From Kavin!...")
});
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('MongoDB Sever is Connected!'));