const Categories = require("../../models/category.model");
const Products = require("../../models/product.model");

module.exports.Categories = async (req, res) => {
    const data = await Categories.find({});
    res.json(data);
};

module.exports.categoriesJoinProducts = async (req, res) => {
    try {
        const categoriesData = await Categories.aggregate([
            {
                $lookup: {
                    from: "products",
                    let: { category_id: { $toString: "$_id" } },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $eq: ["$category_id", "$$category_id"],
                                },
                            },
                        },
                    ],
                    as: "products",
                },
            },

            {
                $project: {
                    title: 1,
                    totalProducts: { $size: "$products" },
                    totalAmount: {
                        $sum: {
                            $map: {
                                input: "$products",
                                as: "product",
                                in: {
                                    $multiply: [
                                        "$$product.price",
                                        "$$product.stock_quantity",
                                    ],
                                },
                            },
                        },
                    },
                },
            },
        ]);

        res.json(categoriesData);
    } catch (error) {
        res.status(500).json(error);
    }
};