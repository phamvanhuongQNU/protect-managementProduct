
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
        {/* <button className="sort-button">Sắp Xếp Theo</button> */}
      </div>

      <div className="order-list">
        <table className="order-table">
          <thead>
            <tr>
             
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

    </>
  
  );
};

export default Oder;
