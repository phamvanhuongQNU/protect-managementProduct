import React from "react";
import "./OrderSummary.css";
import { postData } from "../../../API/getAPI";
import { toast } from "react-toastify";
import { getCookie } from "../../../utils/cookie";
const OrderSummary = ({productsCart}) => {
  const totalAmount = productsCart.reduce((sum, product) => sum + product.price * product.quanlity, 0);
  const user_id = getCookie("token");

  const handleClickOrder = () => {
    const fetchApi = async () => {
    const body = {
      token: getCookie("token")
    }
    const res = await postData(`/order/create/${user_id}`, body, false);
    if (res.status === 201) {
      toast.success("Đặt hàng thành công");
    } else {
      toast.error("Đặt hàng thất bại");
    }
    }
    fetchApi()
  }
  return (
    <div className="column_wrapper your_order">
      <h3>ĐƠN HÀNG CỦA BẠN</h3>
        <div className="row_item item_1">
          <span>SẢN PHẨM</span>
          <p>TẠM TÍNH</p>
        </div>
      {[...productsCart].map((data) => (
      <div className="checkout_total" style={{width: "100%"}}>
        <div className="row_item item_product">
          <p>{data.name} x{data.quanlity}</p>
          <span>
            {(data.price * data.quanlity).toLocaleString("vi-VN")} <u>đ</u>
          </span>
        </div>
      </div>
      ))}
        <div className="row_item item_2">
          <span>Tạm tính</span>
          <span>
            {totalAmount.toLocaleString("vi-VN")} <u>đ</u>
          </span>
        </div>
      <p className="shipping pad">Chọn phương thức giao hàng</p>
      <div className="shipping pad">
        <input type="radio" name="ship" defaultChecked />
        Giao hàng nhanh
      </div>
      <div className="shipping">
        <input type="radio" name="ship" />
        Giao hàng tiết kiệm
      </div>

      <div className="row_item item_3">
        <span>Tổng</span>
        <span>
          {totalAmount.toLocaleString("vi-VN")} <u>đ</u>
        </span>
      </div>

      <p className="shipping pad">Chọn phương thức thanh toán</p>
      <div className="method_pay">
        <div className="row_item">
          <input type="radio" name="pay" defaultChecked />
          Trả tiền mặt khi nhận hàng
        </div>
        <div className="row_item">
          <input type="radio" name="pay" />
          Chuyển khoản qua ngân hàng
        </div>
      </div>

      <div className="row_item order_item">
        <button onClick={handleClickOrder} type="submit">Đặt hàng</button>
      </div>
    </div>
  );
};

export default OrderSummary;
