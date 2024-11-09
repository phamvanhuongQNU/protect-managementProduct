import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import "./Header.css";
const Header = () => {
  return (
    <header className="hop-header">
      <div className="logo-trang">
        <img
          src="https://brandeps.com/icon-download/L/Lightning-icon-vector-07.svg"
          alt="logo"
        />
      </div>
      <div className="hop-tim-kiem">
        <button>
          <FaSearch />
        </button>
        <input type="text" placeholder="Tìm Kiếm" />
      </div>
      <div className="phan-lien-ket">
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
          <li>
            <a href="#"></a>
            <FaUser />
          </li>
          <li>
            <a href="#">
              <FaShoppingCart />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
