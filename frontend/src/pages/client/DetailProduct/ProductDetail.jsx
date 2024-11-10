
import "./ProductDetail.css";
import CountSLSP from "../../../components/client/CountSLSP";
import Header from "../../../layout/client/Header";
import Footer from "../../../layout/client/Footer";

const ProductDetail = () => {
  const { dem, tang, giam } = CountSLSP();
  return (
    <div className="layout-wrapper">
      <div className="header-fixed">
        <Header />
      </div>

      <main className="main-content">
        <div className="container">
          <div className="breadcrumb">
            <a href="#">Trang chủ</a> &gt; <span>Bàn phím</span>
          </div>

          <div className="product-container">
            {/* Product Images */}
            <div className="product-images">
              <div className="main-image">
                <img
                  src="https://hoangthuong.net/wp-content/uploads/2022/05/hinh-anh-cho-con-de-thuong-27-680x356.jpg"
                  alt="Bàn phím"
                />
              </div>
              <div className="thumbnail-images">
                <img
                  src="https://hoangthuong.net/wp-content/uploads/2022/05/hinh-anh-cho-con-de-thuong-27-680x356.jpg"
                  alt="Thumbnail 1"
                  tabIndex="0"
                  className="thumbnail"
                />
                <img
                  src="https://hoangthuong.net/wp-content/uploads/2022/05/hinh-anh-cho-con-de-thuong-27-680x356.jpg"
                  alt="Thumbnail 2"
                  tabIndex="0"
                  className="thumbnail"
                />
                <img
                  src="https://hoangthuong.net/wp-content/uploads/2022/05/hinh-anh-cho-con-de-thuong-27-680x356.jpg"
                  alt="Thumbnail 3"
                  tabIndex="0"
                  className="thumbnail"
                />
                <img
                  src="https://hoangthuong.net/wp-content/uploads/2022/05/hinh-anh-cho-con-de-thuong-27-680x356.jpg"
                  alt="Thumbnail 4"
                  tabIndex="0"
                  className="thumbnail"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <h1 className="product-title">
                YUNZII YZ75 75% Hot Swappable Wireless Gaming Mechanical
                Keyboard, RGB Backlights, BT5.0/2.4G/USB-C, Dye Sub PBT Keycaps
                for Linux/Win/Mac(Gateron G Pro Brown, White)
              </h1>
              <div className="product-price">
                <span className="original-price"><del>2.300.000đ</del></span>
                <span className="sale-price">1.999.000đ</span>
              </div>
              <div className="product-sold">Đã bán 200</div>
              <div className="product-options">
                <div className="quantity-selector">
                  <span>Số lượng:</span>
                  <button onClick={giam} disabled={dem === 1}>
                    -
                  </button>
                  <input type="text" value={dem} disabled />
                  <button onClick={tang}>+</button>
                </div>
                <div className="color-selector">
                  <span>Màu:</span>
                  <button className="color-btn">Trắng</button>
                  <button className="color-btn">Đen</button>
                  <button className="color-btn">Xanh</button>
                </div>
              </div>
              <div className="product-actions">
                <button className="add-to-cart-btn">THÊM VÀO GIỎ</button>
                <button className="buy-now-btn">MUA NGAY</button>
              </div>
            </div>
          </div>

          <div className="product-description">
            <h2>MÔ TẢ SẢN PHẨM</h2>
            <p>
              Hãy cùng cho bạn tiếm hiểu ngắn gọn một vài đặc điểm nổi bật của
              sản phẩm. Đặt biệt, các phím thường để làm phím số và một vài phím
              tắt thường dùng. Nếu quả thực bạn đang tìm kiếm một bộ bàn phím cơ
              chất lượng tốt và giá cả phải chăng thì đừng bỏ qua sản phẩm của
              chúng tôi. Sản phẩm được đóng gói cẩn thận đảm bảo sẽ đến tay bạn
              một cách nguyên vẹn nhất.
            </p>
          </div>
        </div>
      </main>

      <div className="Footer-fixed">
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;
