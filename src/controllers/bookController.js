//bookController is used for handling requests related to books. It exports functions that can be called by other parts of the application.

const Book = require('../models/book');
const Books = [];
 
const getAllBooks = async(request, response) => {    //getAllBooks function is used to retrieve all books from an array and send them back in JSON format.
    try {
        const books = await Book.find();
        response.status(200).json(Books);
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
};

const getBookById = async(request, response) => {
    try {
        const book = await Book.findById(request.params.id);
        if (!book) {
            return response.status(404).json({ message: "book not found" });
        }
        response.status(200).json(book);    //json is used to send the json object as a response
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
};

const createBook = (request, response) => {
    try {
        const { title, author, publishedYear, price, quantity } = request.body;

        if (!title || !author || !publishedYear || !price || !quantity) {
            return response.status(400).json({ message: "please provide all details" });
        }

        const newBook = {
            id: Books.length + 1,    
            title,
            author,
            publishedYear,
            price,
            quantity,
            status: 'available'
        };

        Books.push(newBook);
        response.status(201).json(newBook);

    } catch (error) {
        response.status(500).send({ message: error.message });
    }
};

const updateBook = async (request, response) => {
    try {
      const book=await Book.findByIdAndUpdate(request.params.id,request.body,{new:true});
        if (!book) {
            return response.status(404).json({ message: "book not found" });
        }

        const { title, author, publishedYear, price, quantity } = request.body;

        if (!title || !author || !publishedYear || !price || !quantity) {
            return response.status(400).json({ message: 'Please provide all details' });
        }

        book.title = title;
        book.author = author;
        book.publishedYear = publishedYear;
        book.price = price;
        book.quantity = quantity;

        response.status(200).json({ message: "book updated successfully", data: book });

    } catch (error) {
        response.status(500).send({ message: error.message });
    }
};

const deleteBook = async(request, response) => {
    try {
const book=await Book.findByIdAndDelete(request.params.id)

        if (bookIndex === -1) {
            return response.status(404).json({ message: "book not found" });
        }

        Books.splice(bookIndex, 1);
        response.status(200).json({ message: "book deleted successfully" });

    } catch (error) {
        response.status(500).send({ message: error.message });
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};