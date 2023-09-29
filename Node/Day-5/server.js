const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const Mentor=require('./models/Mentor');
const Student=require('./models/Student');
const app=express();
require('dotenv').config();
const port=process.env.port;
app.use(bodyParser.json());
app.listen(port,(req,res)=>{
    console.log(`Server is running on ${port}`);
});
const DB_URL=process.env.DB_URL;
mongoose.connect(DB_URL,{}).then(()=>console.log(`Connected MongoDb`)).catch((err)=>console.log(`Not Connected ${err}`));
app.post('/Mentor',async(req,res)=>{
    try {
        const mentor=new Mentor(req.body);
        const saveMentor=await mentor.save();
        res.status(201).send(`Saved Successfully:${saveMentor}`);
    } catch (err) {
        res.status(501).send(err);
    }
});
app.post('/Student',async(req,res)=>{
    try {
        const student=new Student(req.body);
        const saveStudent=await student.save();
        res.status(201).send(`Saved Successfully:${saveStudent}`);
    } catch (err) {
        res.status(501).send(err);
    }
});
app.get('/getMentor',async(req,res)=>{
    try {
        const receive=await Mentor.find();
        res.status(201).send(receive);
    } catch (err) {
        res.status(501).send(err);
    }
});
app.get('/getStudent',async(req,res)=>{
    try {
        const recStudent=await Student.find();
        res.status(201).send(recStudent);
    } catch (err) {
        res.status(501).send(err);
    }
});
app.post("/mentor/:mentorId/assign", async (req, res) => {
    try {
      const mentor = await Mentor.findById(req.params.mentorId);
      const students = await Student.find({ _id: { $in: req.body.students } });
  
      students.forEach((student) => {
        student.cMentor = mentor._id;
        student.save();
      });
  
      mentor.students = [
        ...mentor.students,
        ...students.map((student) => student._id),
      ];
      await mentor.save();
      res.send(mentor);
    } catch (error) {
      res.status(400).send(error);
    }
  });
app.put("/student/:studentId/assignMentor/:mentorId", async (req, res) => {
    try {
      const mentor = await Mentor.findById(req.params.mentorId);
      const student = await Student.findById(req.params.studentId);
  
      if (student.cMentor) {
        student.pMentor.push(student.cMentor);
      }
  
      student.cMentor = mentor._id;
      await student.save();
      res.send(student);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  app.get("/mentor/:mentorId/students", async (req, res) => {
    try {
      const mentor = await Mentor.findById(req.params.mentorId).populate(
        "students"
      );
      res.send(mentor);
    } catch (error) {
      res.status(400).send(error);
    }
  });
