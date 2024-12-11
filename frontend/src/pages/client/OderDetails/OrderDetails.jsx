import React, { useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import "./OrderDetails.css";
import { getData } from "../../../API/getAPI";

const OrderDetails = () => {

  const [dataOrder, setDataOrder] = useState([]);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchApi = async () => {
      const res = await getData(`/order/details/${id}`, false);
      if (res.result) {
        setDataOrder(res.result);
      }
    }
    fetchApi()
  }, [id])
  console.log(dataOrder.products);
  return (
    <div className="order-details-container">

      <h2>Chi Tiết Đơn Hàng {dataOrder._id}</h2>
      <table>
      {dataOrder.products && dataOrder.products.map((data, index) => (
          <React.Fragment key={index}>
          <tr>
            <th>Sản phẩm</th>
            <td>{data.name}</td>
          </tr>
          <tr>
            <th>Số lượng</th>
            <td>{data.quanlity}</td>
          </tr>
          <tr>
            <th>Giá</th>
            <td>{data.price.toLocaleString("vi-VN")} <u>đ</u></td>
          </tr>
          </React.Fragment>
      ))}
        <tr>
          <th>Tổng thanh toán</th>
          <td>{dataOrder.total_amount && dataOrder.total_amount.toLocaleString("vi-VN")} <u>đ</u></td>
        </tr>
        <tr>
          <th>Địa chỉ giao hàng</th>
          <td>{dataOrder.address?.street},{dataOrder.address?.ward}, {dataOrder.address?.district}, {dataOrder.address?.province}</td>
        </tr>
        <tr>
          <th>Tình trạng</th>
          <td>{dataOrder.status}</td>
        </tr>
      </table>
      <Link to={"/account/detail"}>
        <button>Quay lại</button>
      </Link>
    </div>
  );
};

export default OrderDetails;
