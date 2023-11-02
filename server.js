import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";

const app = express();
dotenv.config();

// Connect the database
connectDB();

// middleware
app.use(express.json());

// routes
app.use("/api/v1/auth", authRoute);

app.listen(process.env.PORT, (err) => {
  if (err) return console.log("Error while suggesring the server");
  console.log("Server is up and running");
});
