//Database connection string
const mongoose = require("mongoose");
let db = 'mongodb://localhost:27017/coronavirus-test-registration-form';
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("MongoDB is Connected...");
  } catch (err) {
    
    console.log("MongoDB Connected failed...");
    console.error(err.message);
    process.exit(1);


  }
};
connectDB();


module.exports = connectDB;