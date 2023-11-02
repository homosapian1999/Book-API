import Book from "../../models/Book.js";

const getBookController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({
        success: false,
        message: "Book Id is required",
      });
    }
    const book = await Book.findOne({ _id: id }).select("title author summary");
    return res.status(200).send({
      success: true,
      message: "Book imported successfully",
      book,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: "Error in get Book controller",
    });
  }
};

export default getBookController;
