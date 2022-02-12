const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Internal Imports
const connectDB = require("./db");
const homeRoute = require("./routes/homeRoute");
const publicRoute = require("./routes/publicRoute");
const privateRoute = require("./routes/privateRoute");

// Connecting to database
connectDB();
//initiating App
const app = express();

//setting cors
app.use(cors())

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//routes
app.use("/", homeRoute);
app.use("/api", publicRoute);
app.use("/api/user", privateRoute);



// error handling 


//App start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})