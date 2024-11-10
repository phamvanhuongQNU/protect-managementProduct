import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <div className="logo">
          <img
            src="https://brandeps.com/icon-download/L/Lightning-icon-vector-07.svg"
            alt="logo"
          />
        </div>
        <div className="logo-text">
          <h1>ADMIN NIMBUS</h1>
        </div>
      </div>

      <div className="account">
        <span>
          <a href="#">Tài Khoản</a>
        </span>
      </div>

      <div className="products">
        <span>
          <a href="#">Sản Phẩm</a>
        </span>
      </div>

      <div className="orders">
        <span>
          <a href="#">Đơn Hàng</a>
        </span>
      </div>

      <div className="categories">
        <span>
          <a href="#">Danh Mục</a>
        </span>
      </div>

      <div className="logout">
        <span>
          <a href="#">Đăng Xuất</a>
        </span>
      </div>
    </header>
  );
};

export default Header;
