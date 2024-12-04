const express = require("express");
const route = express.Router();
const controller = require("../../controllers/client/product.controller");

// lấy danh sách sản phẩm
route.get("/products", controller.getProducts);

// Lấy danh sách sản phẩm theo danh mục 
route.get("/products/category/:categoryId", controller.getProductsByCategory);

// Lấy sản phẩm mới nhất (Tạm thời lấy sản phẩm cũ vì sản phẩm mới không có)
route.get("/products/new", controller.getNewProducts);

module.exports = route