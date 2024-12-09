const express = require('express');
const route = express.Router();
const controller = require('../../controllers/client/cart.controller')

route.get("/cart/:user_id",controller.index)

// Thêm sản phẩm vào giỏ hàng
route.post("/cart/add-product",controller.addProduct)

// Hiện thị sản phẩm ở giỏ hàng

module.exports = route