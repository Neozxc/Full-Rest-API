// Import the model we made because we can!
const Movie = require("./movieModel");

// { Create } - Controller - This will let us create a new movie
exports.add = async (req, res) => {
    try {
        const createMovie = await Movie.create({ name: "Mission Impossible", actor: "Tom Cruise" });
        res.status(200).send({ createMovie });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
};

// { List } - Controller - This will let us see all movies in DB
exports.list = async (req, res) => {
    try {
        const listMovies = await Movie.find({});
        res.status(200).send({ listMovies });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
};

// { Update } - Controller - This will let us update our movies
exports.update = async (req, res) => {
    // Variables
    const filter = { name: "James" };
    const update = { name: "Bond 007", actor: "James Bond" };
    
    try {
        const updateMovie = await Movie.updateOne(filter, update);
        res.status(200).send({ updateMovie });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    } 
};

// { Delete } - Controller - This will let us delete movies
exports.deleteMovie = async (req, res) => {
    const deletethis = { name: "Mission Impossible", actor: "Tom Cruise" };

    try {
        const deleteMovie = await Movie.deleteOne(deletethis);
        res.status(200).send({ deleteMovie });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
};