import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import addBookController from "../controllers/book/addBookController.js";
import getAllBooksController from "../controllers/book/getAllBooksController.js";

const router = express.Router();

router.post("/addbook", authMiddleware, addBookController);
router.get("/getall", authMiddleware, getAllBooksController);

export default router;
