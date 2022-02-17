// Import
const mongoose = require("mongoose");

// Setup
// Used mongoose-bcrypt pck. Much simplier much easier. 😛
const userSchema = new mongoose.Schema({
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
userSchema.plugin(require('mongoose-bcrypt'));

// Set it to variable
const User = mongoose.model("User", userSchema);

// Export the variable
module.exports = User;