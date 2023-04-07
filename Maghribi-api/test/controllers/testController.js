const Product = require('../models/productModel');
const sharp = require('sharp');
const asyncHandler = require('express-async-handler');

// @route POST /products
const addTest = asyncHandler(async (req, res) => {
    const { name, } = req.body;
    const { file } = req;
    console.log(req)

    const imageName = `${Date.now()}-${file.originalname}`;
    await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toFile(`./images/${imageName}`);

    const test = await Product.create({
        name: name,
        images: imageName,
    });
    res.status(200).json(test);
});

module.exports = { addTest, };