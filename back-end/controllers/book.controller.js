const { Book } = require("../models/book.model");

const getAllBooks = async (req, res) => {
    const {
      search = "",
      page = 1,
      limit = 10,
      sortField = "createdAt",
      sortOrder = "desc",
      category = "",
    } = req.query;
  
    try {
      // MongoDB Query Setup
      const query = {
        $or: [
          { title: { $regex: search, $options: "i" } },
        //   { price: Number(search) ? Number(search) : { $exists: false } },
          { category: { $regex: search, $options: "i" } },
          { discription: { $regex: search, $options: "i" } }
        ],
      };
  
      // Add Category Filtering
      if (category) {
        query.category = category; // Add category condition to the query
      }
  
      // Sorting Options
      const sortSelect = { [sortField]: sortOrder === "asc" ? 1 : -1 };
  
      // Pagination
      const total = await Book.countDocuments(query); // Total products count
      const skip = (page - 1) * limit;
  
      // Fetch Products
      const books = await Book.find(query)
        .skip(skip)
        .limit(Number(limit))
        .sort(sortSelect);
  
      // Response
      res.status(200).json({ books, total, limit, skip, page });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const createBook = async (req, res) => {
    try {
      const { title, category, description, definitionLanguage, termLanguage,  } = req.body;
    //   const image = req.file ? req.file.filename : null;
      const books = await Book.create({
        title,
        category,
        description,
        definitionLanguage,
        termLanguage,
      });
      res.status(200).json(books);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const addCards = async (req, res) => {
    const { bookId } = req.params;
    const { cards } = req.body;
  
    if (!Array.isArray(cards)) {
      return res.status(400).json({ message: "Cards should be an array" });
    }
  
    try {
      const book = await Book.findById(bookId);
      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }
  
      // Add new cards
      book.cards.push(...cards);
      await book.save();
  
      res.status(201).json({ message: "Cards added successfully", book });
    } catch (error) {
      console.error("Failed to add cards:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  module.exports = { getAllBooks, createBook, addCards };