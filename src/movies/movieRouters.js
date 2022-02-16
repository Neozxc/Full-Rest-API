// Imports
const { Router } = require("express");
const { add, list, update, deleteMovie } = require("./movieController");
// Set it to variable 😛
const MR = Router();

// Setup endpoints
MR.post("/create", add);
MR.get("/list", list);
MR.put("/update", update);
MR.delete("/delete", deleteMovie);

// Export
module.exports = MR;
