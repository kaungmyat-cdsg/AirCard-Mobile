const express = require('express')
const { getAllBooks,createBook, getAllCards, createCard } = require('../controllers/book.controller');
// const { requireAuth } = require("../middleware/auth.middleware");
const router = express.Router()

router.get('/',getAllBooks);

router.post('/add-book',createBook);

router.get('/card',getAllCards)

router.post('/add-card',createCard);

module.exports =  router;

