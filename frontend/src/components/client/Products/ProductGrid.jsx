import React from "react";
import { Link } from "react-router-dom";
import "./ProductGrid.css";

const ProductGrid = () => {
  const products = Array(9).fill({
    name: "Bàn phím cơ không dây Logitech G515 Lightspeed TKL",
    price: "1,999,000 đ",
    sales: "200",
    img: "https://bizweb.dktcdn.net/100/329/122/products/ban-phim-co-khong-day-logitech-g515-lightspeed-tkl-002.jpg?v=1728376160827",
  });

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div key={index} className="product-grid__card">
          <div className="product-grid__image">
            <img src={product.img} alt="Product" />
          </div>
          <div className="product-grid__info">
            <div className="product-grid__name">
              <h3>
                <Link to={"/product/detail"}>{product.name}</Link>
              </h3>
            </div>
            <div className="product-grid__details">
              <span className="product-grid__price">{product.price}</span>
              <span className="product-grid__sales">
                Đã bán: {product.sales}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
