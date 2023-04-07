const Product = require('../models/productModel');
const sharp = require('sharp');
const asyncHandler = require('express-async-handler');

// @route POST /products
const createProduct = asyncHandler(async (req, res) => {
    const { category, name, description, price, quantity } = req.body;
    const { file } = req;
    console.log(req)

    const imageName = `${Date.now()}-${file.originalname}`;
    await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toFile(`./images/${imageName}`);

    const product = await Product.create({
        category: category,
        name: name,
        description: description,
        image: imageName,
        price: price,
        quantity: quantity,
    });
    res.status(200).json(product);
});

// @route GET /products
const getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
});

// @route GET /products/:id
const getOneProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    (!product) ? res.status(404).json({ message: `this product not found` }) : null;

    res.status(200).json(product);
});

// @route PUT /products/:id
const updateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    (!product) ? res.status(404).json('this product not found') : null;

    const productUpdated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(productUpdated);
});

// @route PUT /products/:id
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    (!product) ? res.status(404).json('this product not found') : null;

    const productDeleted = await Product.findByIdAndDelete(req.params.id);

    res.status(200).json(productDeleted);
});

module.exports = { createProduct, getAllProducts, getOneProduct, updateProduct, deleteProduct };