import React, { useEffect, useState } from "react";
import {Link, useOutletContext } from "react-router-dom";
import Product from "./Product"
import "./Products.css";
import { getData} from "../../../API/getAPI";

const Products = () => {
  const { searchQuery } = useOutletContext();
  const [dataProducts,setDataProducts] = useState([]);
  const [filterStatus, setFilterStatus] = useState("");

  useEffect(() => {
    // Lấy data
    const fechAPI = async () => {
      const data = await getData("products");
      console.log(data)
      setDataProducts(data.result);
    };
    
    fechAPI();
       
  },[])

  /**
   * Lọc sản phẩm theo trạng thái
   * Tìm kiếm sản phẩm
   */
  const filteredProducts = dataProducts.filter((product) => {
    let isStatusMatched = true;
    if (filterStatus) {
      isStatusMatched = product.status === filterStatus;
    }

    const isSearchMatched = !searchQuery || (product.name && product.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return isStatusMatched && isSearchMatched;
  });

  console.log(dataProducts)
  return (  
  <>
        <div className="filter-section">
          <span>Bộ lọc:</span>
          <div className="filter">
            <button className={`filter-button ${filterStatus === "" ? "active" : ""}`}
              onClick={() => setFilterStatus("")}
            >Tất Cả</button>
            <button className={`filter-button ${filterStatus === "active" ? "active" : ""}`}
              onClick={() => setFilterStatus("active")}
            >Hoạt Động</button>
            <button className={`filter-button ${filterStatus === "inactive" ? "active" : ""}`}
              onClick={() => setFilterStatus("inactive")}
            >Dừng Hoạt Động</button>
          </div>
          <button className="sort-button">Sắp Xếp Theo</button>
        </div>

        <div className="product-list">
          <table className="product-table">
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
              {filteredProducts.length > 0 ? ([...filteredProducts].map((element) => (
                <Product data={element}/>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center", color: "gray" }}>
                  Không tìm thấy sản phẩm nào ở đây.
                </td>
              </tr>
            )}
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
