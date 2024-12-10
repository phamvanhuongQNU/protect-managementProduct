import React from "react";
import CartItem from "./CartItem";
import "./CartItemList.css";

const CartItemList = ({products, handleDelete, handleUpdateQuantity}) => {
  return (
    <>
    <div className="hopdanhsachsp">
      {products.length > 0 ? products.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          handleDelete={handleDelete}
          handleUpdateQuantity={handleUpdateQuantity}
        /> 
      )) : <div style={{height: "490px", display: "flex", alignItems: "center", justifyContent: "center"}}>Không có sản phẩm</div>}
    </div>
    </>
  );
};

export default CartItemList;
