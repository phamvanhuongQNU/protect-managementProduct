const Categories = require("../../models/category.model")

module.exports.Categories =async (req,res) =>{
    const data = await Categories.find({});
    res.json(data)
}