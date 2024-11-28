import React from "react";
import "./PaymentInfo.css";
const PaymentInfo = () => {
  return (
    <form className="column_wrapper method_pay-form">
      <h3>THÔNG TIN THANH TOÁN</h3>
      <label className="form_label">Tên*</label>
      <input type="text" className="form_input" />

      <label className="form_label">Số điện thoại*</label>
      <input type="text" className="form_input" />

      <label htmlFor="email" className="form_label">
        Địa chỉ email*
      </label>
      <input type="email" id="email" className="form_input" />

      <label className="form_label">Quốc gia/Khu vực*</label>
      <span>Việt Nam</span>

      <label className="form_label">Địa chỉ*</label>
      <input type="text" className="form_input" />

      <label className="form_label">Tỉnh/Thành phố*</label>
      <div className="select_container">
        <select className="form_select">
          <option value="null" selected>
            Chọn Tỉnh/Thành phố
          </option>
        </select>
      </div>

      <label className="form_label">Quận/Huyện*</label>
      <div className="select_container">
        <select className="form_select">
          <option value="null" selected>
            Chọn Quận/Huyện
          </option>
        </select>
      </div>

      <label className="form_label">Phường/Xã*</label>
      <div className="select_container">
        <select className="form_select">
          <option value="null" selected>
            Chọn Phường/Xã
          </option>
        </select>
      </div>

      <label className="form_label">Ghi chú đơn hàng (tuỳ chọn)</label>
      <textarea
        id="form_note"
        cols="50"
        rows="5"
        placeholder="• Ghi chú về giao hàng: ví dụ như thời gian, chỉ dẫn địa điểm giao hàng chi tiết hơn."
        className="form_input"
      ></textarea>
    </form>
  );
};

export default PaymentInfo;
