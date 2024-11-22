import React, { useEffect, useState } from "react";
import {Link } from "react-router-dom";
import Product from "./Product"
import "./Products.css";
import { getData} from "../../../API/getAPI";

const Products = () => {
  const [dataProducts,setDataProducts] = useState([]);
  useEffect(()=>{
      // Lấy data
      const fechAPI =async ()=>{
        const data = await getData("products");
        console.log(data)
        setDataProducts(data.result);
      }
      
        fechAPI();
      
      
  },[])

  console.log(dataProducts)
  return (  
  <>
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
                <th><div className="title-image">Ảnh</div></th>
                <th>Tiêu Đề</th>
                <th>Giá</th>
                <th>Trạng Thái</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {[...dataProducts].map((element) => (
                <Product data={element}/>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bottom-bar">
          <Link to={"create"} className="add-product">Thêm Sản Phẩm</Link>
          
          <div className="pagination-buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
          </div>
        </div>
        
    </>
  );
};

export default Products;
