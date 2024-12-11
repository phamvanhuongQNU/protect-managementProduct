import React, { useEffect, useState } from "react";
import "./CartItem.css";
import { changeData } from "../../../API/getAPI";
import { getCookie } from "../../../utils/cookie";
import { FaRegTrashAlt } from "react-icons/fa";
const CartItem = ({ product, handleDelete, handleUpdateQuantity, handleCheckboxChange, checkedItems }) => {
  const [quanlity, setQuanlity] = useState(product.quanlity);
  const token = getCookie("token");

  const fetchApi = async (newQuantity)=>{
    await changeData(`/cart/${token}/${product._id}/${newQuantity}`,false); 
  }

  const handleIncrease = () => {
    const newQuantity = quanlity + 1;
    setQuanlity(newQuantity);
    handleUpdateQuantity(product._id, newQuantity);
    fetchApi(newQuantity);
  };

  const handleDecrease = () => {
    if (quanlity > 1) {
      const newQuantity = quanlity - 1;
      setQuanlity(newQuantity);
      handleUpdateQuantity(product._id, newQuantity);
      fetchApi(newQuantity);
    }
  };

  useEffect(() => {
    if (checkedItems[product._id])
    fetchApi(quanlity)
  },[quanlity, checkedItems, product._id])
  return (
    <div className="sp1">
      <div className="xoaanh">
        <div className="xoa">
          <input type="checkbox" checked={checkedItems[product._id]} onChange={() => handleCheckboxChange(product._id)} />
          <button onClick={()=>{handleDelete(product._id)}}><FaRegTrashAlt /></button>
        </div>
        <div className="anh">
          <img src={product.thumbnail} alt={product.name} />
        </div>
      </div>
      <div className="tenmausoluong">
        <h4>{product.name}</h4>
        <button onClick={handleDecrease}>-</button>
        <input type="number" value={quanlity} readOnly />
        <button onClick={handleIncrease}>+</button>
      </div>
      <div className="price">
        <span>Giá : {product.price.toLocaleString("vi-VN")} đ</span>
      </div>
    </div>
  );
};

export default CartItem;
