const express =  require("express")
const route = express.Router();

const controller = require("../../controllers/admin/product.controller")

// lấy danh sách sản phẩm

route.get("/products",controller.Products)

// Them san pham
route.post("/products/create", controller.createProducts);

// Sua san pham
route.put("/products/:id", controller.updatedProduct);

// Xoa san pham
route.put("/products/delete/:id", controller.deleteProduct);

module.exports = route;