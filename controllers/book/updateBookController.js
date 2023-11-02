import Book from "../../models/Book.js";

const updateBookController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, summary } = req.body;

    if (!id || !title || !author || !summary) {
      return res.status(400).send({
        success: false,
        message: "Bad Request",
      });
    }

    // Update Book
    await Book.findOneAndUpdate(
      { _id: id },
      { title: title, author: author, summary: summary }
    );

    return res.status(201).send({
      success: true,
      message: "Book has been updated successfully",
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: "Error in update Book controller",
    });
  }
};

export default updateBookController;
