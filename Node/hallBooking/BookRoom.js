const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const app=express();
const port=4000;
app.use(bodyParser.json());
const DB_URL='mongodb://localhost:27017/hallbooking';
mongoose.connect(DB_URL,{}).then(()=>console.log(`Connected MongoDb`)).catch((err)=>console.log(`Not Connected ${err}`));
app.listen(port,()=>{
    console.log(`Server is running on :${port}`);
});
const bRSchema=new mongoose.Schema({
    "customerName": String,
    "date": String,
    "startTime": Number,
    "endTime": Number,
    "roomId": Number
});

const bookRoom=mongoose.model('bookRoom',bRSchema);
app.post('/book',async(req,res)=>{
    const reserve=new bookRoom(req.body);
    try {
        if(reserve.date==bookRoom.filter((item)=>item.date&&reserve.startTime==bookRoom.filter((item)=>item.startTime))){
            res.status(400).send(`Room Already Booked!!`);
        }
        const saveRes=await reserve.save();
        res.status(200).send(`Room Created Successfully:${saveRes}`);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
});
