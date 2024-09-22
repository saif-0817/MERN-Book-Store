import { Book } from "../models/bookModel.js";

const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        res.status(500).send({
            message: error.message
        });
    }
};

const addBook = async (req, res) => {
    try {
        const { title, author, publishYear } = req.body;

        if (!title || !author || !publishYear) {
            return res.status(400).send({
                message: "Send all required fields: title, author, publishYear"
            });
        }

        const newBook = new Book(req.body);
        await newBook.save();

        res.status(200).send(newBook);
    } catch (error) {
        res.status(500).send({
            message: error.message
        });
    }
};

const getBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).send({ message: "Book not found" });
        }
        res.status(200).send(book);
    } catch (error) {
        res.status(500).send({
            message: error.message
        });
    }
};

const updateBook = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true }); // Add `{ new: true }` to return the updated document
        if (!updatedBook) {
            return res.status(404).send({ message: "Book not found" });
        }

        res.status(200).send({
            message: "Book updated successfully",
            updatedBook: updatedBook
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).send({ message: "Book not found" });
        }

        res.status(200).send({
            message: `${result.title} Book deleted successfully`
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Use named exports
export { getBooks, getBook, addBook, updateBook, deleteBook };
