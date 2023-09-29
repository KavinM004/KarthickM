const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const app=express();
const port=4000;
app.use(bodyParser.json());
// const DB_URL='mongodb://localhost:27017/hallbooking';
const DB_URL='mongodb+srv://kavinm:Kavi2002@cluster0.r0ubffg.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DB_URL,{}).then(()=>console.log(`Connected MongoDb`)).catch((err)=>console.log(`Not Connected ${err}`));
app.listen(port,()=>{
    console.log(`Server is running on :${port}`);
});
const cRSchema=new mongoose.Schema({
    "seats": Number,
    "amenities": Array,
    "pricePerHour": Number
});

const createRoom=mongoose.model('createRoom',cRSchema);
app.post('/create',async(req,res)=>{
    const rec=new createRoom(req.body);
    try {
        const recSuc=await rec.save();
        res.status(201).send(`Created Successfully :)`);
    } catch (error) {
        res.status(401).send(error.message);
    }
});
app.get('/created',async(req,res)=>{
    try {
        const founded=await createRoom.find();
        res.status(201).send(founded);
    } catch (error) {
        res.status(401).send(error.message);
    }
});
app.put('/create/:id',async(req,res)=>{
    try {
        const update=await createRoom.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(update)  res.status(201).send(`Updated Successfully :${update})`);
        else res.status(401).send(`Id Not Match...!!!`)
    } catch (error) {
        res.status(401).send(error.message);
    }
});
app.delete('/create/:id',async(req,res)=>{
    try {
        const Delete=await createRoom.findByIdAndDelete(req.params.id);
        if(Delete) res.status(201).send(`Successfully Deleted:)`);
        else res.status(401).send(`Id Not Match`)
    } catch (error) {
        res.status(401).send(error.message);
    }
});
