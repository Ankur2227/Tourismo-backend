const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Config/db");
const cors = require("cors");
const userRoutes = require("./Routes/userRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.get("/", (req,res)=>{
    res.send("API is running.");
});

//2021ugcs060
//6M6iN51a8WS7Q33e
app.use("/api/user", userRoutes);
// app.use(notFound);
// app.use(errorHandler);
 
const PORT = 5000;

app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`)
);
