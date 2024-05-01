const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const foods = []; 

app.get('/api/foods', (req, res) => {
  res.status(200).json({ message: "Foods fetched successfully!", foods });
});

app.post('/api/foods', (req, res) => {
  const { name, calories, fats, carbs, protein, sugars } = req.body;
  const food = { id: Math.random().toString(), name, calories, fats, carbs, protein, sugars };
  foods.push(food);
  res.status(201).json({ message: "Food added successfully", food });
});

module.exports = app;
