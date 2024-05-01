const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const foods = []; // This array stores all food items.
const selectedFoods = []; // This array stores selected food items.

// Endpoint to fetch all food items
app.get('/api/foods', (req, res) => {
  res.status(200).json(foods);
});

// Endpoint to add a new food item
app.post('/api/foods', (req, res) => {
  const food = req.body;
  foods.push(food);
  res.status(201).json({ message: "Food added successfully", food });
});

// Endpoint to fetch selected food items
app.get('/api/selectedFoods', (req, res) => {
  res.status(200).json(selectedFoods);
});

// Endpoint to add selected food items
app.post('/api/selectedFoods', (req, res) => {
  const selection = req.body; // This is a single Food object
  selectedFoods.push(selection);  // Directly push the object into the array
  res.status(201).json({ message: "Selected item added successfully", selectedFoods });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

module.exports = app;
