const { request } = require("express");
const mongoose = require("mongoose");

const CardSchema = mongoose.Schema(
  {
    term: {
      type: String,
      required: [true, "Term is required"],
    },
    definition: {
      type: String,
      required: [true, "Definition is required"],
    },
    examples: {
      type: [String], // Array of strings to store multiple examples
      required: false,
    },
    multipleAnswers: {
      type: [String], // Array of strings for multiple possible answers
      required: false,
    },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book', // Reference to the Book model
      required: true, // Ensure the card is linked to a book
    }
  },
);

const BookSchema  = mongoose.Schema(
  {
    title :{
      type : String,
      required : [true],
      unique : true
    },
    description :{
      type : String,
      required : [false],
    },
    termLanguage :{
      type : String,
      required : [true],
      enum: ["English", "Japanese", "Korean"],
      default : "English"
    },
    definitionLanguage :{
      type : String,
      required : [true],
      enum: ["English", "Japanese", "Korean"],
      default : "English"
    },
    category:{
      type: String,
      required: true,
      default: "All"
    },
    image: {
      type: String,
      required: false,
    },
    cards: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Card', // Array of references to Card model
    }],
  },
  {
    timestamps: true,
  },
);

module.exports = {
  Book: mongoose.model('Book', BookSchema),
  Card: mongoose.model('Card', CardSchema), // Add Card model for reference
};
