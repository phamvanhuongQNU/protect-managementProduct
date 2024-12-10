const express =  require("express")
const route = express.Router();
const controller = require("../../controllers/admin/role.controller");

// Hiển thị quyền
route.get("/roles",controller.index);
// Cật nhật
route.put("/roles/update/:id",controller.update);
// Kiểm tra quyền.
route.get("/roles/:id",controller.checkRole);

// kiểm tra quyền theo người dùng
route.get("/roles/role/:token",controller.checkRoleToken);

module.exports = route