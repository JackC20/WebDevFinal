const express = require('express');
const router = express.Router();
const Food = require('../models/food');

// Route to add a new food item
router.post('/food', async (req, res) => {
  try {
    const newFood = new Food({
      name: req.body.name,
      protein: req.body.protein,
      carbs: req.body.carbs,
      sugars: req.body.sugars,
      fats: req.body.fats,
      calories: req.body.calories
    });

    const savedFood = await newFood.save();
    res.json(savedFood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
