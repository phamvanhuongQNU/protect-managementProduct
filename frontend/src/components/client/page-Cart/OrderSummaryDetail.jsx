import React from "react";
import "./OrderSummaryDetail.css";
const OrderSummaryDetails = ({totalAmount, handleCheckout}) => {
  return (
    <div className="summary-details">
      <div className="info">
        <h1>THÔNG TIN ĐƠN HÀNG</h1>
      </div>
      <div className="tamtinh">
        <span>Tạm Tính</span>
        <span>{totalAmount.toLocaleString("vi-VN")} đ</span>
      </div>
      <div className="giamgia">
        <span>Giảm Giá</span>
        <span>0 đ</span>
      </div>
      <div className="tong">
        <span>Tổng Cộng</span>
        <span>{totalAmount.toLocaleString("vi-VN")} đ</span>
      </div>
     
      <div className="ghichu">
        <h3>GHI CHÚ ĐƠN HÀNG</h3>
        <textarea placeholder="Ghi chú"></textarea>
      </div>
      <div className="thanhtoan">
        <button onClick={handleCheckout}>Thanh Toán</button>
      </div>
    </div>
  );
};

export default OrderSummaryDetails;
