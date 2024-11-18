import React from "react";
import CartItem from "./CartItem";
import "./CartItemList.css";

const CartItemList = ({ products, onQuantityChange, onDelete }) => {
  return (
    <div className="hopdanhsachsp">
      {products.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          onQuantityChange={onQuantityChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default CartItemList;
