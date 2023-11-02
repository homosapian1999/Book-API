import Book from "../../models/Book.js";
import User from "../../models/User.js";

const addBookController = async (req, res) => {
  try {
    if (!req.user._id) {
      return res.status(409).send({
        success: false,
        message: "Unauthorized to add the book",
      });
    }
    const { title, author, summary } = req.body;
    if (!title || !author || !summary) {
      return res.status(400).send({
        success: false,
        message: "Enter details",
      });
    }

    const newBook = await Book.create({
      title,
      author,
      summary,
    });

    // Adding the book id to the user

    await User.findOneAndUpdate(
      { name: req.user._id },
      { $push: { books: newBook._id } }
    );

    return res.status(201).send({
      success: true,
      message: "Book created successfully",
      newBook,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: "Book not Found, error in add book controller",
      err,
    });
  }
};

export default addBookController;
