import React, { useState } from "react";
import "./CartItem.css";
const CartItem = ({ product, handleDelete }) => {
  const [quanlity, setQuanlity] = useState(product.quanlity);

  const handleIncrease = () => {
    
    setQuanlity(quanlity + 1);
  };

  const handleDecrease = () => {
    if (quanlity > 1) {
      setQuanlity(quanlity - 1);
    }
  };
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
