const Products = require("../../models/product.model");

// [get] /products
module.exports.getProducts = async (req, res) => {
    try {
        const products = await Products.find({ deleted: false }).select(
            "name price discount stock_quantity thumbnail"
        );
        res.json(products);
    } catch (error) {
        res.status(500).json(error);
    }
};

// [get] /products/category/:category
module.exports.getProductsByCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const find = {
            category_id: categoryId,
            deleted: false,
        };

        const getProducts = await Products.find(find)
        res.status(200).json(getProducts);
    } catch (error) {
        res.status(500).json(error);
    }
};