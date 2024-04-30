const express = require('express');
//const cors = require('cors');

const app = express();

// Use CORS middleware to allow cross-origin requests
//app.use(cors());

// Middleware for parsing JSON bodies
//app.use(express.json());

// Define an array to hold posts (in a real application, you'd use a database)
//const posts = [];

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
app.use('/api/posts',(req,res,next)=>{
  const posts = [
    {
      id:"23",
      title:"1.server Post",
      content:"blah blah"
    },
    {
      id:"43",
      title:"2.server Post",
      content:"posh posh"
    }
  ]
  res.status(200).json({
    message: "this is fetched data",
    posts: posts
  })
  res.send("hello from me")
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
