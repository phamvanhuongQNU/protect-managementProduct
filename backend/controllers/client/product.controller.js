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


// [get] /products/new
module.exports.getNewProducts = async (req, res) => {
    try {
      
        const find = {
            deleted : false
        };
        let limit = 8;
        if (req.query.limit){
            limit = parseInt(req.query.limit)
            
        }
        const getProducts = await Products.find(find).sort({createAt : "desc"}).limit(limit);
        res.status(200).json(getProducts);
    
    } catch (error) {
        res.status(500).json(error);
    }
};
module.exports.getOutstandingroducts = async (req, res) => {
    try {
      
        
        let limit = 8;
        if (req.query.limit){
            limit = parseInt(req.query.limit)
            
        }
        const getProducts = await Products.find({stock_quantity : {$gte : 300},deleted:false}).sort({stock_quantity : "desc"});
        res.status(200).json(getProducts);
    
    } catch (error) {
        res.status(500).json(error);
    }
};

// [get] /products/detail/:id
module.exports.detail = async (req, res) => {
    try {
        const find = {
            deleted: false,
            _id : req.params.id
        }
        const product = await Products.findOne(find)
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
};