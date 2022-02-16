// Secure connection
// Always remember .env file needs to be in src. !(-.-)?
require("dotenv").config();

// Imports
const mongoose = require("mongoose");

// Setup
const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfull connection to MongoDB!");
    } catch (error) {
        console.log(error);
    }
};

// Run
connection();