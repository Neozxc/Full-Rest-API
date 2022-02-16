// Imports
require("./dbconnection/connection");

// Other imports
const express = require("express");
const movieRouter = require("./movies/movieRouters");

// Setup
const app = express();
app.use(express.json());
const port = process.env.PORT;

app.listen(port, () => {
    console.log("Successfully listening to port!");
});