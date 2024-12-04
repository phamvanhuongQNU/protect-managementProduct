const Categories = require("../../models/category.model")
module.exports.getCategories = async(req,res) =>{
    try{
        const categories = await Categories.find({deleted : false});
        res.status(200).json(categories);
    }
    catch(error){
        res.status(500).json(error)
    }
}