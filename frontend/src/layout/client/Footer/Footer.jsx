import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Giới thiệu</h4>
          <p>
            Chúng tôi là công ty chuyên cung cấp các sản phẩm chất lượng với cam
            kết mang lại sự hài lòng cho khách hàng.
            <a href="/about" className="footer-link">
              {" "}
              Tìm hiểu thêm về chúng tôi
            </a>
            .
          </p>
        </div>

        <div className="footer-section">
          <h4>Liên hệ</h4>
          <ul className="footer-list">
            <li>
              <a href="mailto:lamki538@gmail.com">lamki538@gmail.com</a>
            </li>
            <li>
              <a href="tel:+84343283891">+84 34 328 3891</a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Địa chỉ</h4>
          <p>
            170 An Dương Vương, Nguyễn Văn Cừ, Thành phố Quy Nhơn, Bình Định,
            Việt Nam
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()}
          [Tên Công Ty]. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
