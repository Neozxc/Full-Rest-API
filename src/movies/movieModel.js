// Import
const mongoose = require("mongoose");

// Setup
const movieSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },

    actor: {
        type: String,
        required: true
    }
});

// Set it to variable
const Movie = mongoose.model("Movie", movieSchema);

// Export the variable
module.exports = Movie;