import React, { useEffect, useState } from "react";
import "./CartItem.css";
import { changeData } from "../../../API/getAPI";
import { getCookie } from "../../../utils/cookie";
const CartItem = ({ product, handleDelete }) => {
  const [quanlity, setQuanlity] = useState(product.quanlity);
  const token = getCookie("token");
  const fetchApi =async (change)=>{

   const res = await changeData(`/cart/${token}/${product._id}/${change}`,false);
   console.log(res.result.data.products)
  }

  const handleIncrease = () => {
    
      
      
   
    setQuanlity(quanlity + 1);
  };

  const handleDecrease = () => {
    if (quanlity > 1) {
      setQuanlity(quanlity - 1);
    }
  };
  useEffect(()=>{
    fetchApi(quanlity)
  },[quanlity])
  return (
    <div className="sp1">
      <div className="xoaanh">
        <div className="xoa">
          <button onClick={()=>{handleDelete(product._id)}}>Xoá</button>
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
        <span>Giá : {product.price} đ</span>
      </div>
    </div>
  );
};

export default CartItem;
