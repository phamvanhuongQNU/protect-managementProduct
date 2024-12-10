import React, { useEffect, useState } from "react";
import PaymentInfo from "../../../components/client/checkout/PaymentInfo";
import OrderSummary from "../../../components/client/checkout/OrderSummary";
import "./Checkout.css";
import { getCookie } from "../../../utils/cookie";
import { getData } from "../../../API/getAPI";
const Checkout = () => {
  const token = getCookie("token");
  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await getData(`/checkout/${token}`, false);
      if (res.result.data) {
        setProductsCart(res.result.data);
      }
    }
    fetchApi();
  }, [token]);

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
          productsCart={productsCart}
        />
      </div>
    </div>
  );
};

export default Checkout;
