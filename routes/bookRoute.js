import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import addBookController from "../controllers/book/addBookController.js";
import getAllBooksController from "../controllers/book/getAllBooksController.js";
import getBookController from "../controllers/book/getBookController.js";
import updateBookController from "../controllers/book/updateBookController.js";

const router = express.Router();

router.post("/addbook", authMiddleware, addBookController);
router.get("/getall", authMiddleware, getAllBooksController);
router.get("/book/:id", authMiddleware, getBookController);
router.put("/update/:id", authMiddleware, updateBookController);

export default router;
