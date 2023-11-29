const express = require('express')
const productController = require('../Controllers/productController')
const userController = require('../Controllers/userController')

const router = new express.Router()

//allproducts
router.get('/products/all',productController.getAllProductController)
//view product
router.get('/products/view/:id',productController.getAProductController)
//register
router.post('/user/register',userController.registerController)
//login
router.post('/user/login',userController.loginController)

module.exports = router                  