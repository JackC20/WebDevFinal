const express = require('express');
const cors = require('cors');

const app = express();

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Middleware for parsing JSON bodies
app.use(express.json());

// Define an array to hold posts (in a real application, you'd use a database)
const posts = [];

// Route for getting posts
app.get('/api/posts', (req, res) => {
  res.json({ message: "Posts fetched successfully!", posts: posts });
});

// Route for adding a post
app.post('/api/posts', (req, res) => {
  const post = req.body;
  posts.push({ ...post, id: Math.random().toString() }); // Simple ID generation for example purposes
  res.status(201).json({ message: "Post added successfully", post: post });
});

module.exports = app;