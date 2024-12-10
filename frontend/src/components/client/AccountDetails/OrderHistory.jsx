import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderHistory.css";
import { getCookie } from "../../../utils/cookie";
import { getData } from "../../../API/getAPI";

const OrderHistory = () => {
  const [dataOrders, setDataOrders] = useState([]);
  const token = getCookie("token");

  const navigate = useNavigate();
  const handleOrderDetails = (id) => {
    navigate(`/order/details/${id}`);
  }

  useEffect(() => {
    const fetchApi = async () => {
      const res = await getData(`/order/${token}`, false);
      if (res.result) {
        setDataOrders(res.result);
      }
    }
    fetchApi()
  }, [token])

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
          {[...dataOrders].map((data) => (
          <tr>
            <td>{data._id}</td>
            <td>{new Date(data.createdAt).toLocaleString("vi-VN")}</td>
            <td>{data.status}</td>
            <td>{(data.total_amount).toLocaleString("vi-VN")} <u>đ</u></td>
            <td>
                <button onClick={() => handleOrderDetails(data._id)} className="view-details">Xem Chi Tiết</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
