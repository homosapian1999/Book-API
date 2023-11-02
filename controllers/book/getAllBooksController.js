import Book from "../../models/Book.js";

const getAllBooksController = async (req, res) => {
  try {
    const books = await Book.find({}).select("title author summary");
    return res.status(200).send({
      success: true,
      message: "All books imported successfully",
      books,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: "Books not Found, error in get all books controller",
      err,
    });
  }
};

export default getAllBooksController;
