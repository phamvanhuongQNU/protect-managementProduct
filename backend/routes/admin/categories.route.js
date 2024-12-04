const express = require("express")
const controller = require("../../controllers/admin/category.controller")
const route = express.Router();
// Lấy danh sách sản phẩm
route.get("/categories",controller.Categories)

// Lấy danh sách danh mục chưa tổng sản phẩm và giá
route.get("/categories_products", controller.categoriesJoinProducts);
// Tạo danh mục
route.post("/categories/create", controller.create);
// Sửa danh mục
route.put("/categories/edit/:id", controller.edit);

route.get("/categories/:id", controller.detail);
// Xoas danh muc
route.delete("/categories/delete/:id", controller.delete);

module.exports = route