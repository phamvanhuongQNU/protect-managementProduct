import React, { useEffect, useState,useCallback } from "react";
import { Link, useOutletContext, useSearchParams, useParams} from "react-router-dom";
import Product from "./Product";
import "./Products.css";
import { getData,deleteData } from "../../../API/getAPI";
import Pagination from "../../../components/admin/Pagination";

const Products = () => {
  const { searchQuery } = useOutletContext();
  const { categoryId } = useParams();
  const [dataProducts, setDataProducts] = useState([]);
  // Load API
  const [isLoading, setIsLoading] = useState(true);
  // Lọc
  const [filterStatus, setFilterStatus] = useState("");
  // Phân trang
  const [totalPage, setTotalPage] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
 
  
  useEffect(() => {
    // Lấy data
    const fechAPI = async () => {
      const endpoint = categoryId ? `products/category/${categoryId}` : "products";
      const data = await getData(endpoint);
      // console.log(data);
      setDataProducts(data.result.products);
      setTotalPage(Math.ceil(parseInt(data.result.total ) / 5));
      setIsLoading(false);
    };

    fechAPI();
       
  }, [categoryId])
   
  /**
   * Lọc sản phẩm theo trạng thái
   * Tìm kiếm sản phẩm
   */
  const filteredProducts = dataProducts.filter((product) => {
    let isStatusMatched = true;
    if (filterStatus) {
      isStatusMatched = product.status === filterStatus;
    }

    const isSearchMatched =
      !searchQuery ||
      (product.name &&
        product.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return isStatusMatched && isSearchMatched;
  });

  // Phân trang
  const onchanDataProduct = useCallback((data)=>{
      setDataProducts(data)
  }, [])

  // Sắp xếp theo các tiêu chí
 
  const handleChange = (e) =>{
    // console.log(e.target.value);
    const [sortKey,value] = e.target.value.split(" ");
    const sortFetch =async (url)=>{
      const data = await getData(url)
      setDataProducts(data.result.products)
    }
    const paramString = `?key=${sortKey}&value=${value}`
    setSearchParams(new URLSearchParams(paramString))
    
    const endpoint = categoryId ? `products/category/${categoryId}` : "products";
    sortFetch(`${endpoint}?key=${sortKey}&value=${value}`)
  }
  
  // xự kiện xoá sản phẩm
  const handleDeleted = (id)=>{
    const deleteFetch = async ()=>{
      await deleteData(`products/delete/${id}`)
      console.log(id)
    }
    const newDataProduct = dataProducts.filter(item => (item._id !== id))
    deleteFetch();
    setDataProducts(newDataProduct)
    console.log(newDataProduct)
  }
  // console.log(dataProducts);
  // console.log(totalPage);
  
  return (
    
    <>
    
      <div className="filter-section">
        <span>Bộ lọc:</span>
        <div className="filter">
          <button
            className={`filter-button ${filterStatus === "" ? "active" : ""}`}
            onClick={() => setFilterStatus("")}
          >
            Tất Cả
          </button>
          <button
            className={`filter-button ${
              filterStatus === "active" ? "active" : ""
            }`}
            onClick={() => setFilterStatus("active")}
          >
            Hoạt Động
          </button>
          <button
            className={`filter-button ${
              filterStatus === "inactive" ? "active" : ""
            }`}
            onClick={() => setFilterStatus("inactive")}
          >
            Dừng Hoạt Động
          </button>
        </div>
        
        <select onChange={handleChange} name="sort" id="" className="dropdown-sort">
              <option value="name asc">Tiêu đề [A-Z]</option>
              <option value="name desc">Tiêu đề [Z-A]</option>
              <option value="price asc">Giá tăng dần</option>
              <option value="price desc">Giá giảm dần</option>
              <option value="position asc">STT tăng</option>
              <option value="position desc">STT giảm</option>
              
            </select>
      </div>

      <div className="product-list">
        <table className="product-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>STT</th>
              <th>
                <div className="title-image">Ảnh</div>
              </th>
              <th>Tiêu Đề</th>
              <th>Giá</th>
              <th>Trạng Thái</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (  
              <tr>  
                <td colSpan="7" style={{ textAlign: "center", color: "gray" }}>  
                  Đang tải dữ liệu...  
                </td>  
              </tr>  
            ) : filteredProducts.length > 0 ? (
              [...filteredProducts].map((element) => <Product data={element} handleDeleted={handleDeleted} />)
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
        <Link to={"create"} className="add-product">
          Thêm Sản Phẩm
        </Link>

        <Pagination setDataProducts={onchanDataProduct} totalPage={totalPage} sortkey={searchParams.get("key")} value={searchParams.get("value")}/>
      </div>
    </>
  );
};

export default Products;
