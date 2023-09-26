const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const port=3000;
app.listen(port,()=>{
    console.log(`Server is running on localhost:${port}`);
});
app.use(bodyParser.json());
const items=[
    {
        id:1,name:"Kavin M"
    },
    {
        id:2,name:"Karthick M"
    }
];

app.post('/items',(req,res)=>{
    const Body=req.body;
    if(!Body.id || !Body.name){
        res.status(500).send(`Id or Name is Missing!`);
    }

    items.push(Body);
    res.status(201).send(`Id and Name Added Successfully!!`);
});

app.get('/getItems',(req,res)=>{
    res.json(items);
});
app.put("/items/:id", (req, res) => {
    const itemId = parseInt(req.params.id);
    const updatedItem = req.body;
  
    const index = items.findIndex((item) => item.id === itemId);
    if (index === -1) {
      return res.status(404).send("Item not found!");
    }
  
    if (!updatedItem.name) {
      return res.status(500).send("Item must have a name!");
    }
  
    items[index].name = updatedItem.name;
    res.status(201).send(`Item updated with ID: ${itemId}!`);
  });
  
  app.delete("/items/:id", (req, res) => {
    const itemId = parseInt(req.params.id);
    // console.log(JSON.stringify(items,null,1));
    const index = items.findIndex((item) => item.id === itemId);
    //  console.log(index);
    if (index === -1) {
      return res.status(404).send("Item not found!");
    }
  
    items.splice(index, 1);
    res.status(201).send(`Item deleted with ID: ${itemId}!`);
  });