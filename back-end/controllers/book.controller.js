const { Book,Card } = require("../models/book.model");

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
        { category: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ],
    };

    // Add Category Filtering
    if (category) {
      query.category = category; // Add category condition to the query
    }

    // Sorting Options
    const sortSelect = { [sortField]: sortOrder === "asc" ? 1 : -1 };

    // Pagination
    const total = await Book.countDocuments(query); // Total books count
    const skip = (page - 1) * limit;

    // Fetch Books
    const books = await Book.find(query)
      .skip(skip)
      .limit(Number(limit))
      .sort(sortSelect);

    // Calculate if there are more pages
    const hasNextPage = total > skip + Number(limit);

    // Response
    res.status(200).json({
      books,
      total,
      limit: Number(limit),
      skip,
      page: Number(page),
      hasNextPage,
      nextPage: hasNextPage ? Number(page) + 1 : undefined,
    });
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

  // const addCards = async (req, res) => {
  //   const { bookId } = req.params;
  //   const { cards } = req.body;
  //   console.log("hello")
  //   if (!Array.isArray(cards)) {
  //     return res.status(400).json({ message: "Cards should be an array" });
  //   }
  
  //   try {
  //     const book = await Book.findById(bookId);
  //     if (!book) {
  //       return res.status(404).json({ message: "Book not found" });
  //     }
  
  //     // Add new cards
  //     book.cards.push(...cards);
  //     await book.save();
  
  //     res.status(201).json({ message: "Cards added successfully", book });
  //   } catch (error) {
  //     console.error("Failed to add cards:", error);
  //     res.status(500).json({ message: "Internal server error" });
  //   }
  // };

  const createCard = async (req, res) => {
    try {
      const { term, definition, examples, multipleAnswers, bookId } = req.body;
      
      const newCard = new Card({
        term,
        definition,
        examples,
        multipleAnswers,
        bookId,
      });
  
      await newCard.save();
  
      // Optionally, you can add this card to the related Book's `cards` field
      await Book.findByIdAndUpdate(bookId, {
        $push: { cards: newCard._id },
      });
  
      res.status(201).json({
        message: "Card created successfully",
        card: newCard,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error creating card",
        error: error.message,
      });
    }
  };
  
  // Get all cards (with optional filtering by bookId)
  const getAllCards = async (req, res) => {
    try {
      const {
        bookId,
        search = "",
        page = 1,
        limit = 10,
        sortField = "createdAt",
        sortOrder = "desc",
      } = req.query;
  
      console.log("Book ID:", bookId);
  
      // MongoDB Query Setup
      let query = {
        $or: [
          { term: { $regex: search, $options: "i" } },
          { definition: { $regex: search, $options: "i" } },
        ],
      };
  
      if (bookId) {
        query.bookId = bookId; // Ensures filtering by both bookId and search
      }
  
      // Sorting Options
      const sortSelect = { [sortField]: sortOrder === "asc" ? 1 : -1 };
  
      // Get Total Count for Pagination
      const total = await Card.countDocuments(query);
      const skip = (Number(page) - 1) * Number(limit);
  
      // Fetch Cards
      const cards = await Card.find(query)
        .skip(skip)
        .limit(Number(limit))
        .sort(sortSelect);
  
      const hasNextPage = total > skip + Number(limit);
  
      res.status(200).json({
        cards,
        total,
        limit: Number(limit),
        skip,
        page: Number(page),
        hasNextPage,
        nextPage: hasNextPage ? Number(page) + 1 : undefined,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error fetching cards",
        error: error.message,
      });
    }
  };
  
  module.exports = { getAllBooks, createBook, createCard,getAllCards };