const Movie = require('../models/Movie');

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const getProductById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.json(movie);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = {
    getAllMovies,
    getProductById
}