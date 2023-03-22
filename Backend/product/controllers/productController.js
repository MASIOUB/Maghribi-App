const Product = require('../models/productModel');
const sharp = require('sharp');

// @route POST /products
const createProduct = async (req, res) => {
    const { category, name, description, price, quantity } = req.body;
    const { file } = req;

    (!category || !name || !description || !price || !quantity) ? (
        res.status(400).json({ message: `all fields are required` })
    ) : null;

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
}

// @route GET /products
const getAllProducts = async (req, res) => {
    const products = await Product.find();

    res.status(200).json(products);
}

// @route GET /products/:id
const getOneProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);

    (!product) ? res.status(404).json({ message: `this product not found` }) : null;

    res.status(200).json(product);
}

// @route PUT /products/:id
const updateProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);

    (!product) ? res.status(404).json('this product not found') : null;

    const productUpdated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(productUpdated);
}

module.exports = { createProduct, getAllProducts, getOneProduct, updateProduct };