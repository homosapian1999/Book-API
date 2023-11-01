import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.listen(process.env.PORT, (err) => {
  if (err) return console.log("Error while suggesring the server");
  console.log("Server is up and running");
});
