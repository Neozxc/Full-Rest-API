// Import the model we made because we can!
const UserDB = require("./userModel");
// const User = require("./encryptModel");

// { Create } - Controller - This will let us create a new movie
exports.addUser = async (req, res) => {
    try {
        const createUser = await UserDB.create({ username: "Nedas", email: "test123@gmail.com", pass: "test123" });
        res.status(200).send({ createUser });
        // Log it
        console.log("Successfully created movie!");
        console.log(createUser);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
};

// { List } - Controller - This will let us see all movies in DB
exports.listUsers = async (req, res) => {
    try {
        const listUsers = await UserDB.find({});
        res.status(200).send({ listUsers });
        // Log it
        console.log("Successfully listed users!");
        console.log(listMovies);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
};

// { Update } - Controller - This will let us update our movies
exports.updateUser = async (req, res) => {
    // Variables
    const filter = { username: "Nedas" };
    const update = { username: "Sam" };
    
    try {
        const updateUsers = await UserDB.updateOne(filter, update);
        res.status(200).send({ updateUsers });
        // Log it
        console.log("Successfully updated user!");
        console.log(updateUsers);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    } 
};

// { Delete } - Controller - This will let us delete movies
exports.deleteUser = async (req, res) => {
    const deletethis = { username: "Nedas" };

    try {
        const deleteUsers = await UserDB.deleteOne(deletethis);
        res.status(200).send({ deleteUsers });
        // Log it
        console.log("Successfully deleted user!");
        console.log(deleteUsers);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
};