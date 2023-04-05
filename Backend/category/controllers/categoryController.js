const Category = require('../models/categoryModel');
const asyncHandler = require('express-async-handler');

// @route POST /categories
const createCategory = asyncHandler(async (req, res) => {
    try {
        const newCategory = await Category.create(req.body);
        res.json(newCategory);
    }
    catch (error) {
        throw new Error(error);
    };
});

// @route GET /categories
const getAllCategories = asyncHandler(async (req, res) => {
    const allCategories = await Category.find();
    res.status(200).json(allCategories);
});

// @route PUT /categories/:id
const updateCategory = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id)

    if (!category) {
        return res.status(404).json({ message: 'Category not found'});
    }

    const apdatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(apdatedCategory);
});

// @route DELETE /categories/:id
const deleteCategory = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id)

    if (!category) {
        return res.status(404).json({ message: 'Category not found'});
    }

    const deletedCategory = await Category.findByIdAndDelete(req.params.id);

    res.status(200).json(deletedCategory);
});

module.exports = {
    createCategory,
    getAllCategories,
    updateCategory,
    deleteCategory,
}