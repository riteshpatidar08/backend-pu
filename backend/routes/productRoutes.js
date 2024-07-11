const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();


router.get('/allproducts', productController.getProduct)
router.post('/createproduct', productController.createProduct)

module.exports = router