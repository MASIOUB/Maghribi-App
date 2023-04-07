const Category = require('../models/categoryModel');
const asyncHandler = require('express-async-handler');

function createCategories(categories, parentId = null) {
    const categoryList = [];
    let category;
    if (parentId == null) {
      category = categories.filter((cat) => cat.parentId == undefined);
    } else {
      category = categories.filter((cat) => cat.parentId == parentId);
    }
  
    for (let cate of category) {
      categoryList.push({
        _id: cate._id,
        name: cate.name,
        parentId: cate.parentId,
        children: createCategories(categories, cate._id),
      });
    }
  
    return categoryList;
  }

// @route POST /categories
const createCategory = asyncHandler(async (req, res) => {
    try {
        let newCategory = {};
        if (req.body.parentId) {
            newCategory.parentId = req.body.parentId;
        };
        newCategory = await Category.create(req.body);
        res.json(newCategory);
    }
    catch (error) {
        throw new Error(error);
    };
});

// @route GET /categories
const getAllCategories = asyncHandler(async (req, res) => {
    // const allCategories = await Category.find();
    // res.status(200).json(allCategories);
    Category.find({}).exec((error, categories) => {
        if (error) return res.status(400).json({ error });
        if (categories) {
          const categoryList = createCategories(categories);
          res.status(200).json({ categoryList });
        }
      });
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