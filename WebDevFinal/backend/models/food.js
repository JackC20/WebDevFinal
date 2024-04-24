const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  protein: {
    type: Number,
    required: true
  },
  carbs: {
    type: Number,
    required: true
  },
  sugars: {
    type: Number,
    required: true
  },
  fats: {
    type: Number,
    required: true
  },
  calories: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Food', FoodSchema);
