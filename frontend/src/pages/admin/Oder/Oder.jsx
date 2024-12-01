
import "./Oder.css";

const Oder = () => {
  return (
    <>
      <div className="filter-section">
        <span>Bộ lọc:</span>
        <div className="filter">
          <button className="filter-button">Tất Cả</button>
          <button className="filter-button">Đang Giao</button>
          <button className="filter-button">Đã Nhận</button>
        </div>
        <button className="sort-button">Sắp Xếp Theo</button>
      </div>

      <div className="order-list">
        <table className="order-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Khách Hàng/Đơn Hàng</th>
              <th>Dịa Chỉ</th>
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
                <td>
                  lê Văn An <br /> #DH01
                </td>
                <td>Quy Nhơn, Bình Định</td>
                <td>1,999,000đ</td>
                <td>
                  <span className="status active">Đã Nhận</span>
                </td>
                <td>
                  <a href="#" className="detail">
                    Chi Tiết 
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bottom-bar-oder">
        <div className="pagination-buttons-oder">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </div>
      </div>
    </>
    // <div className="layout-container">
    /* <Header />

      <main className="main-content-oder">
        <div className="top-bar">
          <h4>Danh Sách Đơn Hàng</h4>
          <div className="search-bar">
            <input type="text" placeholder="Tìm kiếm..." />
            <button className="complete-button">Hoàn tất</button>
          </div>

          <img
            className="user-avatar"
            src="https://hoangthuong.net/wp-content/uploads/2022/05/hinh-anh-cho-con-de-thuong-27-680x356.jpg"
            alt="User Avatar"
          />
        // </div> */

    // {/* </main> */}
    // {/* // </div> */}
  );
};

export default Oder;
