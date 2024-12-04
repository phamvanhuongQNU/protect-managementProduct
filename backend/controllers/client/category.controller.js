const Categories = require("../../models/category.model");

module.exports.getCategories = async(req,res) =>{
    try{
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
                    thumbnail : 1,
                    totalProducts: { $size: "$products" },
                  
                },
            },
        ]);
        res.status(200).json(categoriesData);
    }
    catch(error){
        res.status(500).json(error)
    }
}
