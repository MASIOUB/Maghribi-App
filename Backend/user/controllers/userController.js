const User = require('../models/userModel');
const asyncHandler = require ('express-async-handler');

// @route Get /users
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

module.exports = { getAllUsers };