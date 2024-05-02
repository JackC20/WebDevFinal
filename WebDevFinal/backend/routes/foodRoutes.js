const express = require('express');
const router = express.Router();
const Food = require('../models/food');

router.get('/food', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});





module.exports = router;
