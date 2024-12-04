import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductGrid.css";
import { getData } from "../../../API/getAPI"

const ProductGrid = () => {
  const [dataProductsGrid, setDataProductsGrid] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    // Lấy data
    const fetchAPI = async () => {
      const endpoint = categoryId ? `/products/category/${categoryId}` : "/products";
      const data = await getData(endpoint, false);
      setDataProductsGrid(data.result);
    }
    fetchAPI();
  }, [categoryId]);
  console.log(dataProductsGrid);

  return (
    <div className="product-grid">
      {[...dataProductsGrid].map((product, index) => (
        <div key={index} className="product-grid__card">
          <div className="product-grid__image">
            <img src={product.thumbnail} alt="Product" />
          </div>
          <div className="product-grid__info">
            <div className="product-grid__name">
              <h3>
                <Link to={`/product/detail/${product._id}`}>{product.name}</Link>
              </h3>
            </div>
            <div className="product-grid__details">
              <span className="product-grid__price">{product.price} đ</span>
              <span className="product-grid__sales">
                Đã bán: {product.stock_quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
