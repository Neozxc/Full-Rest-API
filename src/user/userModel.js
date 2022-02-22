// Import
const mongoose = require("mongoose");

// Setup
const userDatabase = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // If we want users email to be encrypted
        // bcrypt: true
    },
    pass: {
        type: String,
        required: true,
        // Set it to be encrypted
        bcrypt: true
    }
});

// Attach to predefined password
userDatabase.plugin(require('mongoose-bcrypt'));

// Set it to variable
const UserDB = mongoose.model("UserDBs", userDatabase);

// Export the variable
module.exports = UserDB;