import React from "react";
import PaymentInfo from "../../../components/client/checkout/PaymentInfo";
import OrderSummary from "../../../components/client/checkout/OrderSummary";
import "./Checkout.css";
const Checkout = () => {
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
        <OrderSummary />
      </div>
    </div>
  );
};

export default Checkout;
