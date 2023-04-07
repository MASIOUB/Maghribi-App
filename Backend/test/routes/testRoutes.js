const express = require('express');
const router = express.Router();
const { addTest } = require('../controllers/testController');
const upload = require('../middlewares/upload');

router.post('/', upload.single('images'), addTest);

module.exports = router;