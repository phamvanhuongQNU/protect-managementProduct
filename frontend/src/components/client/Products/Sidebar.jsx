import React, { useState, useEffect } from "react";
import { getData } from "../../../API/getAPI";
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
const Sidebar = () => {
    const [dataCategories, setDataCategories] = useState([]);

    const navigate = useNavigate();

    // Xem sản phẩm theo danh mục
    const handleCategoryClick = (categoryId) => {
        navigate(`/products/category/${categoryId}`);
    };
    useEffect(() => {
        // Lấy data
        const fechAPI = async () => {
            const data = await getData("categories");
            setDataCategories(data.result);
        };

        fechAPI();
    }, []);
  return (
    <div className="sidebar">
      <div className="menu-title">
        <h2>Các danh mục</h2>
      </div>
      <ul className="menu-list">
          <li>
            <Link to={"/products"} className="title_cate">Tất cả</Link>
          </li>
        {[...dataCategories].map((element) => (
        <div className="category_wrapper">
          <li>
            <div className="title_cate" onClick={()=>handleCategoryClick(element._id)}>{element.title}</div>
          </li>
        </div>
          ))}
      </ul>
      <div className="banner">
        <h3>Banner</h3>
      </div>
    </div>
  );
};

export default Sidebar;
