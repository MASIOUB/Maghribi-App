const express = require('express');
const router = express.Router();
const { createProduct, getAllProducts, getOneProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const upload = require('../middlewares/upload');

router.post('/', upload.single('image'), createProduct);

router.get('/', getAllProducts);

router.get('/:id', getOneProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);


module.exports = router;