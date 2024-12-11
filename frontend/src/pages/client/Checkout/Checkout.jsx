import React from "react";
import PaymentInfo from "../../../components/client/checkout/PaymentInfo";
import OrderSummary from "../../../components/client/checkout/OrderSummary";
import "./Checkout.css";
import { useLocation } from "react-router-dom";
const Checkout = () => {
  const location = useLocation();
  const { selectedProducts } = location.state || { selectedProducts: [] };
  
  return (
    <div className="checkout-container">
      <div className="tieude">
        <div className="lienket">
          <span>Giỏ hàng</span> &gt; <span>Thanh Toán</span>
        </div>
        <div className="thanhtoan">
          <h2>Thanh Toán</h2>
        </div>
      </div>
      <div className="checkout">
        <PaymentInfo />
        <OrderSummary 
          productsCart={selectedProducts}
        />
      </div>
    </div>
  );
};

export default Checkout;
