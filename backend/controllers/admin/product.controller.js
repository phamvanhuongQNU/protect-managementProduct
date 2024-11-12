const Products = require("../../models/product.model");

// [get] admin/products
module.exports.Products = async(req,res) =>{
    const products = await Products.find({});
    res.json(products)
}