import Book from "../../models/Book.js";

const deleteBookController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({
        success: false,
        message: "Bad Request",
      });
    }

    // Delete the Book
    await Book.findOneAndDelete({ _id: id });
    return res.status(201).send({
      success: true,
      message: "Book has been delete successfully",
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: "Error in delete Book controller",
    });
  }
};

export default deleteBookController;
