import mongoose from "mongoose";

const connectDB = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URL);
    console.log("Database is connected successfully");
  } catch (err) {
    console.log("Error while connecting the database", err);
  }
};

export default connectDB;
