import React from "react";
import Header from "../../../layout/admin/Header";
import "./Products.css";

const Products = () => {
  return (
    <div className="layout-container">
      <Header />

      <main className="main-content-product">
        <div className="top-bar">
          <h4>Danh Sách Sản Phẩm</h4>
          <div className="search-bar">
            <input type="text" placeholder="Tìm kiếm..." />
            <button className="complete-button">Hoàn tất</button>
          </div>

          <img
            className="user-avatar"
            src="https://hoangthuong.net/wp-content/uploads/2022/05/hinh-anh-cho-con-de-thuong-27-680x356.jpg"
            alt="User Avatar"
          />
        </div>

        <div className="filter-section">
          <span>Bộ lọc:</span>
          <div className="filter">
            <button className="filter-button">Tất Cả</button>
            <button className="filter-button">Hoạt Động</button>
            <button className="filter-button">Dừng Hoạt Động</button>
          </div>
          <button className="sort-button">Sắp Xếp Theo</button>
        </div>

        <div className="product-list">
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>STT</th>
                <th>Ảnh</th>
                <th>Tiêu Đề</th>
                <th>Giá</th>
                <th>Trạng Thái</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(4)].map((_, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src="https://hoangthuong.net/wp-content/uploads/2022/05/hinh-anh-cho-con-de-thuong-27-680x356.jpg"
                      alt="Sản phẩm"
                    />
                  </td>
                  <td>Bàn Phím Cơ</td>
                  <td>1,999,000đ</td>
                  <td>
                    <span className="status active">Hoạt Động</span>
                  </td>
                  <td>
                    <button className="edit-button">Sửa</button>
                    <button className="delete-button">Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bottom-bar">
          <button className="add-product">Thêm Sản Phẩm</button>
          <div className="pagination-buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;
