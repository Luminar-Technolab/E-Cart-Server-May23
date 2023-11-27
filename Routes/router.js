const express = require('express')
const productController = require('../Controllers/productController')

const router = new express.Router()

router.get('/products/all',productController.getAllProductController)

module.exports = router                  