import React from "react";
import "./OrderSummaryDetail.css";
import { Link } from "react-router-dom";
const OrderSummaryDetails = () => {
  return (
    <div className="summary-details">
      <div className="info">
        <h1>THÔNG TIN ĐƠN HÀNG</h1>
      </div>
      <div className="tamtinh">
        <span>Tạm Tính</span>
        <span>0 đ</span>
      </div>
      <div className="giamgia">
        <span>Giảm Giá</span>
        <span>0 đ</span>
      </div>
      <div className="tong">
        <span>Tổng Cộng</span>
        <span>0 đ</span>
      </div>
     
      <div className="ghichu">
        <h3>GHI CHÚ ĐƠN HÀNG</h3>
        <textarea placeholder="Ghi chú"></textarea>
      </div>
      <div className="thanhtoan">
        <Link to={"/checkout"}>Thanh Toán</Link>
      </div>
    </div>
  );
};

export default OrderSummaryDetails;
