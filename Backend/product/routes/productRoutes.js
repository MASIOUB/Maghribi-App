const express = require('express');
const router = express.Router();
const { createProduct, getAllProducts, getOneProduct, updateProduct } = require('../controllers/productController');
const upload = require('../middlewares/upload');

router.post('/', upload.single('image'), createProduct);

router.get('/', getAllProducts);

router.get('/:id', getOneProduct);

router.put('/:id', updateProduct);


module.exports = router;