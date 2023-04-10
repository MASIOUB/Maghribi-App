const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const generateToken = require('../middlewares/generateToken');
const asyncHandler = require('express-async-handler');

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).json({
            message: "user not found",
        });
    };

    const validePassword = await bcrypt.compare(password, user.password);

    if (!validePassword) {
        return res.status(400).json({
            message: "invalid password",
        });
    };

    if (user && validePassword) {
        return res.status(200).json({
            user: user,
            token: generateToken(user.id),
        })
    }
});

const adminLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).json({
            message: "user not found",
        });
    };

    if (user) {
        console.log(user)

        if (user.role !== "admin") throw new Error("not autorized")

        const validePassword = await bcrypt.compare(password, user.password);

        if (!validePassword) {
            return res.status(400).json({
                message: "invalid password",
            });
        };

        if (user && user.role === "admin" && user.role !== 'customer' && validePassword) {
            return res.status(200).json({
                user: user,
                token: generateToken(user.id),
            })
        }
    }
});

module.exports = { loginUser, adminLogin };