import React from "react";
import "./EditAccount.css";

const EditAccount = () => {
  return (
    <div className="edit-account-container">
      <div className="edit-account">
        <h2>Cập nhật thông tin cá nhân</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Tên</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Số điện thoại</label>
            <input type="text" id="phone" name="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Địa chỉ</label>
            <input type="text" id="address" name="address" />
          </div>
          <button type="button" className="btn-submit">
            Cập nhật thông tin
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditAccount;
