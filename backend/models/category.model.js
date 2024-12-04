const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    title : String,
    deleted : {
        type : Boolean,
        default : false
    },
    thumbnail : String
},{timestamps : true})

const Category = mongoose.model("Category",CategorySchema,"categories");

module.exports = Category;