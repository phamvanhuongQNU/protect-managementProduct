const { default: mongoose } = require("mongoose");
const Products = require("../../models/product.model");
const paginationHelper = require("../../helpers/paginationHelper");
// [get] admin/products
module.exports.Products = async (req, res) => {
    const find = {
        deleted: false,
    };

    // Phân trang
    const countProduct =await Products.findOne(find).countDocuments();
    const pagination = paginationHelper({
        limit : 5,
        skip : 0
    },req.query
    )
    // Sắp xếp theo tiêu chi
    let sort = {
    }
    if (req.query.key){
        sort[req.query.key] = req.query.value
        
    }else{
        sort.position = "asc"
    }
    const products = await Products.find(find).sort(sort).limit(pagination.limit).skip(pagination.skip);
    res.json({
        products : products,
        total : countProduct
    });
};

// [post] admin/products/create
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

// [put] admin/products/edit/:id
module.exports.updatedProduct = async (req, res) => {
    try {
        const updatedProduct = await Products.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
};

// [delete] admin/products/deleted/:id
module.exports.deleteProduct = async (req, res) => {
    try {
        await Products.findByIdAndUpdate(req.params.id, {
            $set: { deleted: true },
        });
        res.status(200).json("Product has been deleted...");
    } catch (error) {
        res.status(500).json(error);
    }
};
// [get] admin/products/:id
module.exports.detailProduct = async (req, res) => {
    try {
        const Product = await Products.findOne({ _id: req.params.id });
        res.status(200).json(Product);
    } catch (error) {
        res.status(500).json(error);
    }
};

// [get] admin/products/:category
module.exports.getProductsByCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const getProducts = await Products.find({
            category_id: categoryId,
            deleted: false
        });

        res.status(200).json(getProducts);
    } catch (error) {
        res.status(500).json(error);
    }
};
