const { User } = require("../db")



const createUser = async (name, email, phone) => 
 await User.create({ name, email, phone });


module.exports = { createUser };
