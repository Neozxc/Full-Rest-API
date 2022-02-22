// Imports
require("./dbconnection/connection");

// Other imports
const express = require("express");
const MR = require("./movies/movieRouters");
const USR = require("./user/userRouters");

// Setup
const app = express();
app.use(express.json({
    extended: false
}));
// app.use(express.json());
app.use(MR);
app.use(USR);
const port = process.env.PORT;

app.listen(port, () => {
    console.log("Successfully listening to port!");
});