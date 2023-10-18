const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const app=express();
require('dotenv').config();
const port=process.env.port;
app.use(bodyParser.json());
app.listen(port,(req,res)=>{
    console.log(`Server is running on ${port}`);
});
const DB_URL=process.env.DB_URL;
mongoose.connect(DB_URL,{}).then(()=>console.log(`Connected MongoDb`)).catch((err)=>console.log(`Not Connected ${err}`));
function logRequest(req,res,next){
  console.log(`Receiving ${req.method} request from ${req.url} at ${new Date().toISOString()}`);
  next();
}
function mentorMessage(req,res,next){
  console.log(`$$$$$$$$$$$$$$$$$$ - Mentor`);
  next();
}
function studentMessage(req,res,next){
  console.log(`**************** - Student`);
  next();
}
function tesetAuthentication(req,res,next){
  if(req.query.token === 'movieTicket'){
        req.user={id:1,name:'John'};
  }else if(req.query.token==='idCard'){
    req.user={id:2,name:'Manikadan'};
  }else{
    res.status(401).send(`Unauthorization!!!`)
  }
}
app.get('/secure/profile',(req,res)=>{
  res.send(`Hey,from ${req.user.name}`);
})
app.use(logRequest);
app.use('/mentor',mentorMessage);
app.use('/student',studentMessage);
app.use('/secure',tesetAuthentication);
app.get('/mentor',(req,res)=>{
  res.send(`Hi,Mentor`);
});
app.get('/student',(req,res)=>{
  res.send(`Hi,Student`);
});
app.put("/mentor/mentorPut",(req,res)=>{
  console.log(`Hi,Mentor Put`);
});
app.post("/student/studentPost",(req,res)=>{
  console.log(`Hi,Student Post`);
});
