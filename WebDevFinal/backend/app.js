const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const foodModel = require('./models/food')

mongoose.connect("mongodb+srv://JackC:Pr8UJ6yC28os3uDZ@cluster0.upkj2nq.mongodb.net/food-item?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
  console.log("connected to database")
})
.catch(()=>{
  console.log("connection error")
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors());

app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS"
);
console.log("Middleware");
next();
})
app.use((req, res, next)=>{

  next();
})

const selectedFoods = [];

app.get('/api/selectedFoods', (req, res) => {
  res.status(200).json(selectedFoods);
});

// Endpoint to add selected food items
app.post('/api/selectedFoods', (req, res) => {
  const selection = req.body; 
  selectedFoods.push(selection);  
  res.status(201).json({ message: "Selected item added successfully", selectedFoods });
});


//password in notes
app.post('/api/food',(req,res,next)=>{
  const post = new foodModel({
    id: req.body.id,
    foodItem: req.body.foodItem,
    proteins: req.body.proteins,
    carbs: req.body.carbs,
    sugars: req.body.sugars,
    fats: req.body.fats,
    calories: req.body.calories
  })
  post.save()
  console.log(post)
  res.status(201).json({
    message: "post added successfully",
  });
  res.send("hello from app database")
})
app.get('/api/food',(req,res,next)=>{
  foodModel.find().then(documents =>{
    res.status(200).json({
      message: "post added successfully",
      posts: documents
    });
  });
});


module.exports = app;