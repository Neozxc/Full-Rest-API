// Imports
const { Router } = require("express");
const { addUser, listUsers, updateUser, deleteUser } = require("./userController");
// Set it to variable 😛
const USR = Router();

// Setup endpoints
USR.post("/usercreate", addUser);
USR.get("/listusers", listUsers);
USR.put("/updateuser", updateUser);
USR.delete("/deleteuser", deleteUser);

// Export
module.exports = USR;
