const express = require("express");
const router = express.Router();
const controller = require("../../controllers/admin/user.controller");

// Lấy thông tin chi tiết người dùng
router.get("/users/:id",controller.detail)
// Lấy danh sách người dùng
router.get("/users",controller.index)

// Thêm người dùng
router.post("/users/create",controller.create)
// Sửa người dùng
router.put("/users/edit/:id",controller.edit)

// Xoá người dùng
router.delete("/users/delete/:id",controller.delete)



module.exports = router