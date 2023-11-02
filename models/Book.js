import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  summary: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Book", BookSchema);
