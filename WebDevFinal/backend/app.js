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
// Use CORS middleware to allow cross-origin requests
//app.use(cors());

// Middleware for parsing JSON bodies
//app.use(express.json());

// Define an array to hold posts (in a real application, you'd use a database)
//const posts = [];
//Disable CORS
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
  const selection = req.body; // This is a single Food object
  selectedFoods.push(selection);  // Directly push the object into the array
  res.status(201).json({ message: "Selected item added successfully", selectedFoods });
});


//change to api post
// app.get('/api/posts',(req,res,next)=>{
//   const posts =
//   [
//     {
//       id:"23",
//       foodItem:"1.server Post",
//       calories: "calorie",
//       proteins:"pro",
//       carbs:"carb",
//       sugars:"sugar",
//       fats:"fat",
//     },
//     {
//       id:"24",
//       foodItem:"2.server Post",
//       calories: "calorie",
//       proteins:"pro",
//       carbs:"carb",
//       sugars:"sugar",
//       fats:"fat",
//     },
//     {
//       id:"25",
//       foodItem:"3.server Post",
//       calories: "calorie",
//       proteins:"pro",
//       carbs:"carb",
//       sugars:"sugar",
//       fats:"fat",
//     },
//   ]
//   console.log(post)
//   res.status(201).json({
//     message: "fetched data",
//     posts: posts
//   });
//   res.send("hello from me")
// })
// app.post('/api/posts',(req,res,next)=>{
//   const post = req.body;
//   console.log(post)
//   res.status(201).json({
//     message: "post added correctly",
//   });
//   res.send("hello from app.post")
// })
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
// // Route for getting posts
// app.get('/api/posts', (req, res) => {
//   res.json({ message: "Posts fetched successfully!", posts: posts });
// });

// // Route for adding a post
// app.post('/api/posts', (req, res) => {
//   const post = req.body;
//   posts.push({ ...post, id: Math.random().toString() }); // Simple ID generation for example purposes
//   res.status(201).json({ message: "Post added successfully", post: post });
// });

module.exports = app;