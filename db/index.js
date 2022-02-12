const mongoose = require("mongoose");
require("dotenv").config();

function connectDB() {
  mongoose.connect(process.env.MONGODB_URI)
  
  const connection = mongoose.connection;
  
  connection.once('open', () => {
    console.log("Database Connected");
  });
}

module.exports = connectDB;