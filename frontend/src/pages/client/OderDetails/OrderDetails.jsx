import React from "react";
import { Link } from "react-router-dom";
import "./OrderDetails.css";

const OrderDetails = () => {
  return (
    <div className="order-details-container">
      <h2>Chi Tiết Đơn Hàng 12345</h2>
      <table>
        <tr>
          <th>Sản phẩm</th>
          <td>Con lợn nhựa</td>
        </tr>
        <tr>
          <th>Số lượng</th>
          <td>2</td>
        </tr>
        <tr>
          <th>Giá</th>
          <td>150.000 VNĐ</td>
        </tr>
        <tr>
          <th>Tổng thanh toán</th>
          <td>300.000 VNĐ</td>
        </tr>
        <tr>
          <th>Địa chỉ giao hàng</th>
          <td>Quy Nhơn, Việt Nam</td>
        </tr>
        <tr>
          <th>Tình trạng</th>
          <td>Đã giao</td>
        </tr>
      </table>
      <Link to={"/account/detail"}>
        <button>Quay lại</button>
      </Link>
    </div>
  );
};

export default OrderDetails;
