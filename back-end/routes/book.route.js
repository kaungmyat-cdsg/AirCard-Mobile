const express = require('express')
const { getAllBooks,createBook, addCards } = require('../controllers/book.controller');
// const { requireAuth } = require("../middleware/auth.middleware");
const router = express.Router()

router.get('/',getAllBooks);

router.post('/add-book',createBook);

router.post('/:bookId/cards', addCards)

module.exports =  router;

