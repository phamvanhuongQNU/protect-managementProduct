const Categories = require("../../models/category.model");
const Products = require("../../models/product.model");

// [Get] /categories
module.exports.Categories = async (req, res) => {
    const data = await Categories.find({deleted : false});
    res.json(data);
};

module.exports.detail = async (req, res) => {
    try{
        const id = req.params.id
        const data = await Categories.findOne({_id : id})
        res.json(data);
    }catch{
        res.status(404).json({
            message : "Lỗi"
        });
    }
};
// [Get] /categories_products
module.exports.categoriesJoinProducts = async (req, res) => {
    try {
        const categoriesData = await Categories.aggregate([
            {
                $lookup: {
                    from: "products",
                    let: { category_id: { $toString: "$_id" }},
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
                $match : {deleted : false}
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
// [Post] /categories/create
module.exports.create =async (req,res) =>{
    try{
        const newCategory = new Categories(req.body)
        const category =await newCategory.save();
        res.status(200).json({
            data : category,
            message : "Thêm danh mục thành công"
        })
    }catch{
        res.status(500).json({
            message : "Thêm danh mục Thất bại"
        })
    }
}
// [Put] /categories/edit/:id
module.exports.edit =async (req,res) =>{
    try{
        const id = req.params.id;
        const category = await Categories.updateOne({_id : id},req.body)
        console.log(category)

        res.status(200).json({
            data : category,
            message : "Sửa thông tin danh mục thành công thành công"
        })
    }catch{
        res.status(500).json({
            message : "Sửa thông tin danh mục thất bại"
        })
    }
}
// [delete] /categories/delete/:id

module.exports.delete = async (req, res) => {

    try {
      await Categories.updateOne({ _id: req.params.id }, {deleted : true});
      res.status(200).json({
        message: "Danh mục đã bị xoá",
      });
    } catch {
      res.status(404).json({
        message: "Xoá danh mục thất bại",
      });
    }
  };