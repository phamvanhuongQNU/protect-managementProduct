import React from "react";
import "./OrderSummaryDetail.css";
const OrderSummaryDetails = ({ subtotal, discount, total }) => {
  return (
    <div className="summary-details">
      <div className="info">
        <h1>THÔNG TIN ĐƠN HÀNG</h1>
      </div>
      <div className="tamtinh">
        <span>Tạm Tính</span>
        <span>{subtotal.toLocaleString()} đ</span>
      </div>
      <div className="giamgia">
        <span>Giảm Giá</span>
        <span>{discount.toLocaleString()} đ</span>
      </div>
      <div className="tong">
        <span>Tổng Cộng</span>
        <span>{total.toLocaleString()} đ</span>
      </div>
      <div className="magiamgia">
        <span>Mã Giảm Giá</span>
        <a href="#">Xem Tất Cả</a>
      </div>
      <div className="ghichu">
        <h3>GHI CHÚ ĐƠN HÀNG</h3>
        <textarea placeholder="Ghi chú"></textarea>
      </div>
      <div className="thanhtoan">
        <button>Thanh Toán</button>
      </div>
    </div>
  );
};

export default OrderSummaryDetails;
