const Product = require("../../models/product.model");

module.exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find({ deleted: false }).select(
            "name price discount stock_quantity thumbnail"
        );
        res.json(products);
    } catch (error) {
        res.status(500).json(error);
    }
};
