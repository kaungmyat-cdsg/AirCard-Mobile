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
    },
    { _id: false } // Prevent automatic creation of an `_id` field for each card
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
        default : "English"
    },
    definitionLanguage :{
        type : String,
        required : [true],
        default : "English"
    },
    category:{
      type: String,
      required: true,
      default: "None"
    },
    image: {
      type: String,
      requeired: false,
    },
    cards: {
        type: [CardSchema], // Array of CardSchema objects
        required: false,
      },
  },
  {
    timestamps: true,
  },
);

// const BookSchema = new mongoose.Schema({
//   userId: String,
//   products: [
//     {
//       productId: mongoose.Schema.Types.ObjectId,
//       name: String,
//       price: Number,
//       quantity: Number,
//       category: String,
//     },
//   ],
// });

module.exports = {
  Book: mongoose.model('Book', BookSchema),
//   Cart: mongoose.model('Cart', CartSchema),
};