const express =  require("express")
const route = express.Router();

const controller = require("../../controllers/admin/product.controller")

// lấy danh sách sản phẩm

route.get("/products",controller.Products)

// Them san pham
route.post("/products/create", controller.createProducts);

// Sua san pham
route.put("/products/edit/:id", controller.updatedProduct);

// Xoa san pham
route.put("/products/delete/:id", controller.deleteProduct);

// Chi tiết sản phẩm
<<<<<<< HEAD
route.get("/products/detail/:id", controller.detailProduct);

// Xem sản phẩm theo danh mục
route.get("/products/category/:categoryId", controller.getProductsByCategory);

=======
route.get("/products/:id", controller.detailProduct);
// Sắp xếp theo tiêu chí
>>>>>>> 942e7b55c11485fa50f66383727c15910c4dcba5
module.exports = route;