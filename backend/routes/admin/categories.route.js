const express = require("express")
const controller = require("../../controllers/admin/category.controller")
const route = express.Router();
// Lấy danh sách sản phẩm
route.get("/categories",controller.Categories)


module.exports = route