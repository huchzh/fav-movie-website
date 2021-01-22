const express =require('express');
const router = express.Router();

const { 
    getAllMovies, 
    getProductById 
} = require('../controller/movieControllers');

/*
@desc   GET all movies from db
@route  GET /api/movies
@access GET Public
*/
router.get('/', getAllMovies);

/*
@desc   GET a movie from db
@route  GET /api/movies/:id
@access GET Public
*/
router.get('/:id', getProductById);

module.exports = router;