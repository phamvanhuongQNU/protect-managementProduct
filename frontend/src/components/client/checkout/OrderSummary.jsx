import React from "react";
import "./OrderSummary.css";
const OrderSummary = () => {
  return (
    <div className="column_wrapper your_order">
      <h3>ĐƠN HÀNG CỦA BẠN</h3>

      <div className="row_item item_1">
        <span>SẢN PHẨM</span>
        <p>TẠM TÍNH</p>
      </div>

      <div className="row_item item_product">
        <p>Tên sản phẩm x1</p>
        <span>
          200,000<u>đ</u>
        </span>
      </div>
      <div className="row_item item_product">
        <p>Tên sản phẩm x2</p>
        <span>
          400,000<u>đ</u>
        </span>
      </div>

      <div className="row_item item_2">
        <span>Tạm tính</span>
        <span>
          0<u>đ</u>
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
          0<u>đ</u>
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
        <button type="submit">Đặt hàng</button>
      </div>
    </div>
  );
};

export default OrderSummary;
