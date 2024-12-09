import React, { useEffect, useRef, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { getData,deleteData } from "../../../API/getAPI";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import CreateCategory from "../CreateCategory/index";
import EditCategory from "../EditCategory/index";
import Swal from "sweetalert2";
import { modalDelete } from "../../../components/admin/Swal/index";

import "./Category.css";

const Category = () => {
  const [dataCategories, setDataCategories] = useState([]);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const navigate = useNavigate();
  const idRef = useRef();

  // Xem sản phẩm theo danh mục
  const handleCategoryClick = (categoryId) => {
    navigate(`/admin/products/category/${categoryId}`);
  };
  // Ẩn và hiện thị modal
  const handleShow = ()=> setShow(true);
  const handleClose = ()=>setShow(false);

  const handleShowEdit = ()=> setShowEdit(true);
  const handleCloseEdit = ()=>setShowEdit(false);
  // Sự kiện nhấn nút chỉnh sửa
  
  const handleOnclickEdit = (e)=>{
    idRef.current = e.target.id;
    
    handleShowEdit();
  }
  useEffect(() => {
    // Lấy data
    const fechAPI = async () => {
      const data = await getData("categories_products");
      setDataCategories(data.result);
    };

    fechAPI();
  }, []);
   // Nhấn nút xoá
   const hanldelete = (e) =>{
    const modal =  modalDelete("Xác nhận xoá","Bạn muốn xoá");
    const fectchApi = async ()=>{
      const res = await deleteData(`categories/delete/${e.target.id}`)
      if (res.status === 200){
        modal.then((result) => {
          if (result.isConfirmed) {
            const newCategories = [...dataCategories].filter((item)=> e.target.id !== item._id)
            setDataCategories(newCategories)
            Swal.fire({
              title: "Xoá thành công",
              text: res.result.message,
              icon: "success",
            });
          }
        }
        
      );
        
      }
      else{
        console.log(res.status)
      }
    }
    console.log(e.target)
    fectchApi();
  }
  return (
    <>
      <div className="category-list">
        <table className="category-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Danh Mục</th>
              <th>Tổng sản phẩm</th>
              <th>Tổng giá tiền</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {[...dataCategories].map((data) => (
              <tr className="data-category">
                <td>
                  <input type="checkbox" />
                </td>
                <td
                  className="name"
                  width={"40%"}
                  onClick={() => handleCategoryClick(data._id)}
                >
                  <div>{data.title}</div>
                </td>
                <td
                  className="price"
                  onClick={() => handleCategoryClick(data._id)}
                >
                  {data.totalProducts}
                </td>
                <td
                  className="price"
                  onClick={() => handleCategoryClick(data._id)}
                >
                  {(data.totalAmount).toLocaleString("vi-VN")} ₫
                </td>
                <td>
                  <div className="icon-wrapper">
                    <button id={data._id} className="edit-button" onClick={handleOnclickEdit} >
                      <FaRegEdit  />
                    </button>
                    <button id={data._id} onClick={hanldelete} className="delete-button">
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bottom-bar">
        <button
          onClick={handleShow}
          
          
          className="add-category"
        >
          Thêm Danh Mục
        </button>
        {show && <CreateCategory handleClose={handleClose} dataCategory={dataCategories} setDataCategories={setDataCategories} />}
        {showEdit && <EditCategory  id={idRef.current}  handleClose={handleCloseEdit} dataCategory={dataCategories} setDataCategories={setDataCategories}/>}
      </div>
    </>
  );
};

export default Category;
