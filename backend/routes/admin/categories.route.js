const express = require("express")
const controller = require("../../controllers/admin/category.controller")
const route = express.Router();
// Lấy danh sách sản phẩm
route.get("/categories",controller.Categories)

// Lấy danh sách danh mục chưa tổng sản phẩm và giá
route.get("/categories_products", controller.categoriesJoinProducts);


module.exports = route