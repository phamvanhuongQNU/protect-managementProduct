import React from "react";
import Sidebar from "../../../components/client/Products/Sidebar";
import Filters from "../../../components/client/Products/Filters";
import ProductGrid from "../../../components/client/Products/ProductGrid";
import "./Products.css";

const Products = () => {
  return (
    <div className="products-container">
      <div className="breadcrums">
        <span>Trang Chủ</span> &gt; <span>Sản phẩm</span>
      </div>
      <div className="products-wrapper">
        <div className="products-sidebar">
          <Sidebar />
        </div>
        <div className="products-main">
          <Filters />
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default Products;