import express from "express";
import { getBook, getBooks, updateBook, deleteBook, addBook } from "../controllers/bookController.js";

 const router = express.Router();


router.post('/', addBook)


router.get('/', getBooks)

router.get('/:id', getBook)

router.put('/:id', updateBook)


router.delete('/:id', deleteBook);

export default router;  // Default export