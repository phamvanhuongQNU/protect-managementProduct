const express = require("express");
const route = express.Router();
const controller = require("../../controllers/client/product.controller");

// lấy danh sách sản phẩm
route.get("/products", controller.getProducts);

module.exports = route