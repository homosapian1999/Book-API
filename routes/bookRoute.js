import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import addBookController from "../controllers/book/addBookController.js";

const router = express.Router();

router.post("/addbook", authMiddleware, addBookController);

export default router;
