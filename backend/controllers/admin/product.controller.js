const Products = require("../../models/product.model");

// [get] admin/products
module.exports.Products = async (req, res) => {
    const find = {};

    const products = await Products.find(find).sort({ position: "asc" });
    res.json(products);
};

// [post] admin/products
module.exports.createProducts = async (req, res) => {
    try {
        const countProduct = await Products.countDocuments();

        const newProduct = new Products({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            discount: req.body.discount,
            category_id: req.body.category_id,
            stock_quantity: req.body.stock_quantity,
            status: req.body.status,
            images: req.body.images,
            position: countProduct + 1,
            thumbnail: req.body.thumbnail,
        });
        const addProduct = await newProduct.save();
        res.status(201).json(addProduct);
    } catch (error) {
        res.status(500).json(err);
    }
};