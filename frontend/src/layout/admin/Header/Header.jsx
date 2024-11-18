import React from "react";
import {Link} from "react-router-dom"
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

      <div className="account active">
        <span>
          <Link to={"/admin/account"}>Tài Khoản</Link>
        </span>
      </div>

      <div className="products active">
        <span>
          <Link to={"/admin/products"}>Sản Phẩm</Link>
        </span>
      </div>

      <div className="orders active">
        <span>
          <Link to={"/admin/oder"}>Đơn Hàng</Link>
        </span>
      </div>

      <div className="categories active">
        <span>
          <a href="#">Danh Mục</a>
        </span>
      </div>

      <div className="logout active">
        <span>
          <a href="#">Đăng Xuất</a>
        </span>
      </div>
    </header>
  );
};

export default Header;
