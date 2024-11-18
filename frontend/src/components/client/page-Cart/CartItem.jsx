import React, { useState } from "react";
import "./CartItem.css";
const CartItem = ({ product, onQuantityChange, onDelete }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(product.id, newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(product.id, newQuantity);
    }
  };

  const handleDelete = () => {
    onDelete(product.id);
  };

  return (
    <div className="sp1">
      <div className="xoaanh">
        <div className="xoa">
          <button onClick={handleDelete}>Xoá</button>
        </div>
        <div className="anh">
          <img src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="tenmausoluong">
        <h4>{product.name}</h4>
        <p>{product.color}</p>
        <button onClick={handleDecrease}>-</button>
        <input type="number" value={quantity} readOnly />
        <button onClick={handleIncrease}>+</button>
      </div>
      <div className="gia">
        <span>Giá</span>
        <span>{(product.price * quantity).toLocaleString()}đ</span>
      </div>
    </div>
  );
};

export default CartItem;
