const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const app=express();
const port=3000;
app.use(bodyParser.json());
app.listen(port,(req,res)=>{
    console.log(`Server is running on ${port}`);
});
// const DB_URL='mongodb://localhost:27017/admin';
const DB_URL='mongodb+srv://KavinM:Kavi2002@cluster0.jqplwlv.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(DB_URL,{}).then(()=>console.log(`Connected MongoDb`)).catch((err)=>console.log(`Not Connected ${err}`));
const bookSchema=new mongoose.Schema({
    title: String,
    author: String,
    publishedDate: String
});
const Book=mongoose.model('Book',bookSchema);
app.post('/book',async(req,res)=>{
    const book=new Book(req.body);
    try{
        const savedBook=await book.save();
        res.status(201).send(savedBook);
    }catch(err){
        res.status(400).send(err.message);
    }
});
app.get('/books',async(req,res)=>{
    try{
        const books=await Book.find();
        res.status(201).send(books);
    }catch(err){
        res.status(400).send(err.message);
    }
});
app.get('/books/:id',async(req,res)=>{
    try{
        const book=await Book.findById(req.params.id);
        res.status(201).send(book);
    }catch(err){
        res.status(400).send(err.message);
    }
});
app.put('/book/:id',async(req,res)=>{
    try{
        const sB=await Book.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(201).send(sB);
    }catch(err){
        res.status(400).send(err.message);
    }
});
app.delete('/bookDelete/:id',async(req,res)=>{
    try{
        const B=await Book.findByIdAndDelete(req.params.id,{new:true});
        res.status(201).send(B);
    }catch(err){
        res.status(400).send(err.message);
    }
});