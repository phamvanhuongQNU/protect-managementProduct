const express = require('express');
const route = express.Router();
const controller = require('../../controllers/client/cart.controller')
// Hiện thị sản phẩm ở giỏ hàng

route.get("/cart/:user_id",controller.index)

// Thêm sản phẩm vào giỏ hàng
route.post("/cart/add-product",controller.addProduct)

// Thay đổi số lượng sản phẩm
route.put("/cart/:user_id/:product_id/:quanlity",controller.changeQuanlity)

module.exports = route