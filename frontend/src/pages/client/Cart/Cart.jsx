import React, { useEffect, useState } from "react";
import CartItemList from "../../../components/client/page-Cart/CartItemList";
import OrderSummaryDetails from "../../../components/client/page-Cart/OrderSummaryDetail";
import { getData } from "../../../API/getAPI";
import { getCookie } from "../../../utils/cookie";
import "./Cart.css";
const Cart = () => {
  const token = getCookie("token");
  const [products, setProducts] = useState([]);

  // Sự kiện xoá sản phẩm
  const handleDelete = (id) => {
    const newProducts = [...products].filter(product => product._id !== id)
    setProducts(newProducts)
  };


  useEffect(()=>{
      const fetchApi =async ()=>{
        const res = await getData(`/cart/${token}`,false);
     
        if (res.result){
          setProducts(res.result.data);
        }
      }
      fetchApi()   
  },[token])
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
          />
        </div>
        <OrderSummaryDetails
          
        />
      </div>
    </div>
  );
};

export default Cart;
