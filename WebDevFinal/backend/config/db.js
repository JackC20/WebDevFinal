const { MongoClient } = require("mongodb");
//const mongoose = require('mongoose');
const uri = "mongodb+srv://srgh3b:xsS8cgQPSiQn7UUe@cluster0.upkj2nq.mongodb.net/food-item?retryWrites=true&w=majority&appName=Cluster0";
// const dbURI = "mongodb://localhost:27017/macronutrientTracker";  // Local MongoDB URI

const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string
const client = new MongoClient(uri);

 async function run() {
    try {
        // Connect to the Atlas cluster
         await client.connect();
         // Get the database and collection on which to run the operation
         const db = client.db("food-item");
         const col = db.collection("foods");
         // Create new documents
         const foodItems = [
          { name: 'Chicken Breast', calories: 165, fats: 3.6, carbs: 0, protein: 31, sugars: 0 },
          { name: 'Brown Rice', calories: 216, fats: 1.8, carbs: 44.8, protein: 5, sugars: 0.7 },
          { name: 'Egg', calories: 78, fats: 5, carbs: 0.6, protein: 6, sugars: 0.6 },
          { name: 'Almonds', calories: 162, fats: 14, carbs: 6, protein: 6, sugars: 1.2 },
          { name: 'Salmon', calories: 206, fats: 11.8, carbs: 0, protein: 22.1, sugars: 0 },
          { name: 'Broccoli', calories: 31, fats: 0.4, carbs: 6, protein: 2.5, sugars: 1.5 },
          { name: 'Banana', calories: 105, fats: 0.3, carbs: 27, protein: 1.3, sugars: 14.4 },
          { name: 'Spinach', calories: 7, fats: 0.1, carbs: 1.1, protein: 0.9, sugars: 0.1 },
          { name: 'Yogurt', calories: 59, fats: 0.4, carbs: 3.6, protein: 10, sugars: 3.2 },
          { name: 'Oats', calories: 153, fats: 2.6, carbs: 27.3, protein: 5.3, sugars: 0 },
          { name: 'Sweet Potato', calories: 86, fats: 0.1, carbs: 20, protein: 1.6, sugars: 4.2 },
          { name: 'Avocado', calories: 160, fats: 15, carbs: 9, protein: 2, sugars: 0.7 },
          { name: 'Walnuts', calories: 185, fats: 18.5, carbs: 3.9, protein: 4.3, sugars: 0.7 },
          { name: 'Black Beans', calories: 227, fats: 0.9, carbs: 40.8, protein: 15.2, sugars: 0 },
          { name: 'Milk', calories: 103, fats: 2.4, carbs: 12, protein: 8, sugars: 12 },
          { name: 'Beef Steak', calories: 271, fats: 17.2, carbs: 0, protein: 26.1, sugars: 0 },
          { name: 'Quinoa', calories: 222, fats: 3.6, carbs: 39.4, protein: 8.1, sugars: 1.6 },
          { name: 'Tomato', calories: 22, fats: 0.2, carbs: 4.8, protein: 1.1, sugars: 3.2 }
        ];
         // Insert the documents into the specified collection
         const p = await col.insertMany(foodItems);
         // Find the document
         // Print results
         console.log("Document found:\n" + JSON.stringify(p));
        } catch (err) {
         console.log(err.stack);
     }

     finally {
        await client.close();
    }
}
run().catch(console.dir);




