import React, { useEffect, useState } from "react";
import CartItemList from "../../../components/client/page-Cart/CartItemList";
import OrderSummaryDetails from "../../../components/client/page-Cart/OrderSummaryDetail";
import { getData } from "../../../API/getAPI";
import { getCookie } from "../../../utils/cookie";
import "./Cart.css";
const Cart = () => {
  const token = getCookie("token");
  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateTotal = (products) => {
    const total = products.reduce(
      (sum, product) => sum + product.price * product.quanlity,
      0
    );
    setTotalAmount(total);
  };

  // Sự kiện xoá sản phẩm
  const handleDelete = (id) => {
    const newProducts = [...products].filter(product => product._id !== id)
    setProducts(newProducts)
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    const updatedProducts = products.map((product) =>
      product._id === id ? { ...product, quanlity: newQuantity } : product
    );
    setProducts(updatedProducts);
    calculateTotal(updatedProducts); // Cập nhật tổng tiền
  };

  useEffect(()=>{
      const fetchApi =async ()=>{
        const res = await getData(`/cart/${token}`,false);
     
        if (res.result.data){
          setProducts(res.result.data);
          calculateTotal(res.result.data);
        }
      }
      fetchApi()   
  },[token])
  console.log(products.length)
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
            handleDelete={handleDelete}
            handleUpdateQuantity={handleUpdateQuantity}
          />
        </div>
        <OrderSummaryDetails
          totalAmount={totalAmount}
        />
      </div>
    </div>
  );
};

export default Cart;
