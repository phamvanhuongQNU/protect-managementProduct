const express = require("express")
const route = express.Router();

const controller = require("../../controllers/client/user.controller")

// Đăng nhập
route.post("/login",controller.login)

// Lấy thông tin chi tiết
route.get("/user/detail/:token",controller.detail)

module.exports = route;