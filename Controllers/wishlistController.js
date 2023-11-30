const wishlists = require('../Models/wishlistSchema')

//add to wishlist
exports.addToWishlistController = async (req,res)=>{
    const {id,title,price,description,category,image,rating}= req.body
    const userId = req.payload
    try{
        const existingProduct = await wishlists.findOne({id})
        if(existingProduct){
            res.status(406).json("Product already exist in your wishlist!!!")
        }else{
            const newProduct = new wishlists({
                id,title,price,description,category,image,rating,userId
            })
            await newProduct.save()
            res.status(200).json(newProduct)
        }
    }catch(err){
        res.status(401).json(err)
    }
}