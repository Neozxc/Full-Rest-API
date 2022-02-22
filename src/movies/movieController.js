// Import the model we made because we can!
const Movie = require("./movieModel");

// { Create } - Controller - This will let us create a new movie
exports.add = async (req, res) => {
    try {
        const createMovie = await Movie.create(req.body);
        res.status(200).send({ createMovie });
        // Log it
        console.log("Successfully created movie!");
        console.log(createMovie);
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
        // Log it
        console.log("Successfully listed movies!");
        console.log(listMovies);
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
        // Log it
        console.log("Successfully updated movie!");
        console.log(updateMovie);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    } 
};

// { Delete } - Controller - This will let us delete movies
exports.deleteMovie = async (req, res) => {
    const deletethis = { username: "Fast&Furious", actor: "Vin Diesel - Paul Walker" };

    try {
        const deleteMovie = await Movie.deleteOne(deletethis);
        res.status(200).send({ deleteMovie });
        // Log it
        console.log("Successfully deleted movie!");
        console.log(deleteMovie);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
};

// { Protect } - Controller - This will let us protect users password by hashing it
// exports.protect = async (req, res) => {
//     try {
//         const newUser = await User.create(req.body);
//         res.status(200).send({ user: newUser });
//         // Log it
//         console.log("Successfully created user!");
//         console.log(newUser);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({ error: error.message });
//     }
// };