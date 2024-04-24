const mongoose = require('mongoose');
const uri = "mongodb+srv://owenr878:<IXacvhN7RlPb7IIV>@cluster0.fydrgkv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbURI = "mongodb://localhost:27017/macronutrientTracker";  // Local MongoDB URI


const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, options);
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
