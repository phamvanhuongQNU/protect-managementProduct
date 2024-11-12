import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import "./Header.css";
const Header = () => {
  
  return (
    <header className="header">
      <div className="logo-page">
        <img
          src="https://brandeps.com/icon-download/L/Lightning-icon-vector-07.svg"
          alt="logo"
        />
      </div>
      <div className="form__search">
        <button className="btn-search">
          <FaSearch className="icon-search" />
        </button>
        <input type="text" placeholder="Tìm Kiếm" maxLength={100}/>
      </div>
      <div className="inner-menu">
        <ul>
          <li>
            <a href="#">Trang Chủ</a>
          </li>
          <li>
            <a href="#">Liên Hệ</a>
          </li>
          <li>
            <a href="#">Sản Phẩm</a>
          </li>
          <li>
            <a href="#">Giới Thiệu</a>
          </li>
          
        </ul>
      </div>
      <div className="inner-logo">
        <ul className="list-icon">
        <li>
            <a href="#"><FaUser className="icon" /></a>
            
          </li>
          <li>
            <a href="#">
              <FaShoppingCart className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
