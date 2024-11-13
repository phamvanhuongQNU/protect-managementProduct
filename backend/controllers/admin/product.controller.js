const Products = require("../../models/product.model");

// [get] admin/products
module.exports.Products = async(req,res) =>{
    const find = {};

    const products = await Products.find(find).sort({"position":"asc"});
    res.json(products)
}