const express = require('express');
//const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
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

//change to api post
app.get('/api/posts',(req,res,next)=>{
  const posts =
  [
    {
      id:"23",
      foodItem:"1.server Post",
      calories: "calorie",
      proteins:"pro",
      carbs:"carb",
      sugars:"sugar",
      fats:"fat",
    },
    {
      id:"24",
      foodItem:"2.server Post",
      calories: "calorie",
      proteins:"pro",
      carbs:"carb",
      sugars:"sugar",
      fats:"fat",
    },
    {
      id:"25",
      foodItem:"3.server Post",
      calories: "calorie",
      proteins:"pro",
      carbs:"carb",
      sugars:"sugar",
      fats:"fat",
    },
  ]
  console.log(post)
  res.status(201).json({
    message: "fetched data",
    posts: posts
  });
  res.send("hello from me")
})
app.post('/api/posts',(req,res,next)=>{
  const post = req.body;
  console.log(post)
  res.status(201).json({
    message: "post added correctly",
  });
  res.send("hello from app.post")
})

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
