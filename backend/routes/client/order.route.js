const express = require('express');
const route = express.Router();
const controller = require('../../controllers/client/order.controller');

// Lấy thông tin các đơn hàng
route.get("/order/:user_id", controller.getOrders);

// Lấy thông tin chi tiết đơn hàng
route.get("/order/details/:id", controller.getOrder);

// Thêm sản phẩm vào đơn hàng
route.post("/order/create/:user_id", controller.createOrder);

module.exports = route;