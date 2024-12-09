import React from "react";
import CartItem from "./CartItem";
import "./CartItemList.css";

const CartItemList = ({products,handleDelete}) => {
  return (
    <>
    <div className="hopdanhsachsp">
      {products.length > 0 ? products.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          handleDelete={handleDelete}
        /> 
      )) : <div>Không có sản phẩm</div>}
    </div>
    </>
  );
};

export default CartItemList;
