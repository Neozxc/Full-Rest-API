// Import
const mongoose = require("mongoose");

// Setup
const movieSchema = new mongoose.Schema({

    movie: {
        type: String,
        unique: true
    },

    actor: {
        type: String,
    },
});

// Set it to variable
const Movie = mongoose.model("Movies", movieSchema);

// Export the variable
module.exports = Movie;