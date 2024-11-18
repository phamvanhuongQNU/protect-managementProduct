import React, { useState } from "react";
import CartItemList from "../../../components/client/page-Cart/CartItemList";
import OrderSummaryDetails from "../../../components/client/page-Cart/OrderSummaryDetail";
import "./Cart.css";
const Cart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Sản phẩm 1",
      color: "Đỏ",
      image:
        "https://hoangthuong.net/wp-content/uploads/2022/05/hinh-anh-cho-con-de-thuong-27-680x356.jpg",
      quantity: 1,
      price: 1000000,
    },
    {
      id: 2,
      name: "Sản phẩm 2",
      color: "Xanh",
      image:
        "https://hoangthuong.net/wp-content/uploads/2022/05/hinh-anh-cho-con-de-thuong-27-680x356.jpg",
      quantity: 2,
      price: 1200000,
    },
  ]);

  const calculateSubtotal = () => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const calculateDiscount = () => {
    return 0;
  };

  const calculateTotal = () => {
    return calculateSubtotal() - calculateDiscount();
  };

  const handleQuantityChange = (id, newQuantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  const handleDelete = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div className="Cart">
      <div className="breadcrum">
        <span>Trang chủ</span> &gt; <span>Giỏ hàng</span>
      </div>
      <div className="order-summary">
        <div className="order-items">
          <h1>Giỏ hàng</h1>
          <CartItemList
            products={products}
            onQuantityChange={handleQuantityChange}
            onDelete={handleDelete}
          />
        </div>
        <OrderSummaryDetails
          subtotal={calculateSubtotal()}
          discount={calculateDiscount()}
          total={calculateTotal()}
        />
      </div>
    </div>
  );
};

export default Cart;
