import React, {useState, useEffect} from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [isVisible, setIsVisible] = useState(true);  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false); // Ẩn div khi scroll xuống quá 50px
      } else {
        setIsVisible(true); // Hiện lại div khi ở trên cùng
      }
    };

    // Gắn sự kiện scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup sự kiện scroll khi component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="header_container">
      {isVisible && (
        <div style={{opacity: isVisible ? 1 : 0, transition: "opacity 0.5s ease-out"}} className="announcement">
          <span>📦 Siêu ưu đãi! Miễn phí vận chuyển cho đơn hàng trên 500,000đ</span>
        </div>
      )}
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
              <Link to={"/"}>Trang Chủ</Link>
            </li>
            <li>
              <Link to="#">Liên Hệ</Link>
            </li>
            <li>
              <Link to={"products"}>Sản Phẩm</Link>
            </li>
            <li>
              <Link to={"#"}>Giới Thiệu</Link>
            </li>
      
          </ul>
        </div>
        <div className="inner-logo">
          <ul className="list-icon">
          <li>
              <Link to={"/login"}><FaUser className="icon" /></Link>
      
            </li>
            <li>
              <Link to={"/cart"}>
                <FaShoppingCart className="icon" />
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
