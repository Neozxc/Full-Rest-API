// Import
const bcryptjs = require("bcryptjs");

// Setup
exports.hashPass = async (req, res, next) => {
    bcryptjs.genSalt(10, (saltError, salt) => {
        if (saltError) {
            throw saltError
        } else {
            bcryptjs.hash(req.body.pass, salt, (hashError, hash) => {
                if (hashError) {
                    throw hashError
                } else {
                    console.log(hash);
                }
            })
        }
    })
};