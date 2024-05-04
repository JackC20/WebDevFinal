const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  // id: {
  //   type: Number,
  //   required: true,
  //   unique: true
  // },
  foodItem: {
    type: String,
    required: true,
    unique: true
  },
  protein: {
    type: String,
    required: true
  },
  carbs: {
    type: String,
    required: true
  },
  sugars: {
    type: String,
    required: true
  },
  fats: {
    type: String,
    required: true
  },
  calories: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Food', FoodSchema);
