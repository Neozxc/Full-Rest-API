// Imports
require("./dbconnection/connection");

// Other imports
const express = require("express");
const MR = require("./movies/movieRouters");

// Setup
const app = express();
app.use(express.json());
app.use(MR);
const port = process.env.PORT;

app.listen(port, () => {
    console.log("Successfully listening to port!");
});