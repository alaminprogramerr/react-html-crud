const express= require('express')
const productRouter = express.Router()
const productController= require('../controller/productController')


productRouter.post('/create-product', productController.createProduct )//create product
productRouter.post('/update-product/:id', productController.updateProduct)//edit product
productRouter.delete('/delete-product/:id', productController.deleteProduct )//delete product 
productRouter.get('/get-product-info', productController.getProductInfo )//delete product 
productRouter.get('/get-all-product', productController.getAllProduct)//get all product
productRouter.get('/get-single-product/:id', productController.getSingleProduct)//test
productRouter.get('/doBuy/:id', productController.doBuy)//test
productRouter.get('/welcome', productController.welcome)//test
module.exports= productRouter