const express = require("express")
const route = express.Router();

const controller = require("../../controllers/client/user.controller")

// Đăng nhập
route.post("/login",controller.login)
// Đăng kí
route.post("/register",controller.register)
route.post("/registerOtp",controller.registerOtp)

// Lấy thông tin chi tiết
route.get("/user/detail/:token",controller.detail)
// Chỉnh sửa thông tin
route.put("/user/edit/:token",controller.edit)

module.exports = route;