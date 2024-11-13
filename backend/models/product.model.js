const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
    name : String,
    description : String,
    price : Number,
    discount : Number,
    category_id : String,
    stock_quantity : Number,
    status : String,
    images : [String],
    deleted : {
        type : Boolean,
        default : false
    },
    position : Number,
    thumbnail : String,
},
{ timestamps: true }
)
const Product =  mongoose.model("Product",ProductSchema,"products");
module.exports = Product;
