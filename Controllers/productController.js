const products = require('../Models/productSchema')

//get all products
exports.getAllProductController = async (req,res)=>{
    try{
        const allProducts = await products.find()
        res.status(200).json(allProducts)
    }catch(err){
        res.status(401).json(err)
    }
}