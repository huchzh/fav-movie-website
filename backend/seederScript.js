require('dotenv').config();

const moviesData = require('./data/movies');
const connectDB = require('./config/db');
const Movie = require('./models/Movie');

connectDB();

const importData = async () => {
    try {
        await Movie.deleteMany({});
        await Movie.insertMany(moviesData);

        console.log("Data Import Success");
    } catch (error) {
        console.error("Error with data import", error);
        process.exit(1);
    }
}

importData(); 