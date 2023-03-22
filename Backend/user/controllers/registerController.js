const bcrypt = require('bcryptjs');
const User = require('../models/userModel')

const registerUser = async(req, res) => {
    if(Object.keys(req.body).length > 0) {
        const {
            firstName,
            lastName,
            phone,
            email,
            password,
            country,
            city,
            address,
        } = req.body;

        // check fieilds 
        if (
            !firstName || !lastName || !phone || !email || !password || !country || !city || !address
        ) return res.status(400).json({ message: "all fields are required" })

        // check email
        const isUserExist = await User.findOne({ email });

        if (isUserExist) return res.status(400).json({ message: "this email is already in use" })

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create user
        const user = await User.create({
            firstName,
            lastName,
            phone,
            email,
            password: hashedPassword,
            country,
            city,
            address,
        })

        user ? res.status(201).json({
            // firstName: user.firstName,
            // lastName: user.lastName,
            // email: user.email,
            // password: hashedPassword,
            message: "signup successful"
        })
        : null;
    }
}

module.exports = registerUser;