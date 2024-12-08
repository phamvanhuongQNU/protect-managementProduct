import React from "react";
import { Link } from "react-router-dom";
import "./OrderHistory.css";

const OrderHistory = () => {
  return (
    <div className="order-history">
      <h2>Lịch sử đơn hàng</h2>
      <table>
        <thead>
          <tr>
            <th>Mã Đơn Hàng</th>
            <th>Ngày Đặt</th>
            <th>Tình Trạng</th>
            <th>Tổng Tiền</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#12345</td>
            <td>12/01/2024</td>
            <td>Đã giao</td>
            <td>300.000 VNĐ</td>
            <td>
              <Link to={"/order/details"}>
                <button className="view-details">Xem Chi Tiết</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
