import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { CiUser } from "react-icons/ci";
import { FaProductHunt } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <div className="logo">
          <img
            src="/Lightning-icon-vector-07.svg"
            alt="logo"
          />
        </div>
        <div className="logo-text">
          <h1>ADMIN NIMBUS</h1>
        </div>
      </div>
      <div className="header-menu">
        <ul>
          <li>
            
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "isActive" : ""
              }
              to={"/admin/account"}
            >
              <CiUser className="icon-menu"/>
              Tài Khoản
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "isActive" : ""
              } to={"/admin/products"}>
                <FaProductHunt className="icon-menu"/>
              Sản Phẩm
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "isActive" : ""
              } to={"/admin/oder"}> <BsCart4 className="icon-menu"/> Đơn hàng</NavLink>
          </li>
          <li>
            {" "}
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "isActive" : ""
              } to={"/admin/category"}>  <BiCategory className="icon-menu"/> Danh mục</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
