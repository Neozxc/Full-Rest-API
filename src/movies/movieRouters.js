// Imports
const { Router } = require("express");
const { hashPass } = require("../middleware/protect");
const { add, list, update, deleteMovie, protect } = require("./movieController");
// Set it to variable 😛
const MR = Router();

// Setup endpoints
MR.post("/create", add);
MR.get("/list", list);
MR.put("/update", update);
MR.delete("/delete", deleteMovie);
MR.post("/user", protect);

// Export
module.exports = MR;
