import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menu-title">
        <h2>Các danh mục</h2>
      </div>
      <ul className="menu-list">
        <li>
          <a href="#" >Tất cả</a>
        </li>
        <li>
          <a href="#">Xe</a>
        </li>
        <li>
          <a href="#">Quần áo</a>
        </li>
        <li>
          <a href="#">Mỹ phẩm</a>
        </li>
        <li>
          <a href="#">Thể thao</a>
        </li>
        <li>
          <a href="#">Đồ chơi</a>
        </li>
      </ul>
      <div className="banner">
        <h3>Banner</h3>
      </div>
    </div>
  );
};

export default Sidebar;
