import React, { useEffect, useState } from "react";

import {Link} from 'react-router-dom'
import {getData} from "../../../../API/getAPI"
import "./NewProducts.css";

const NewProducts = () => {
    
    const [newProduct,setNewProduct] = useState([]);
    const [limit,setLimit] = useState(8);

    

    // Nhấn nút xem them
    const handleClick = ()=>{

        setLimit(limit+4);
    }
    useEffect(()=>{
        const fetchApi = async ()=>{
            const res = await getData(`/products/new?limit=${limit}`,false);
            setNewProduct(res.result)
        }
        fetchApi();
    },[limit])
    return (
        <div className="new_products">
            <div className="products_title">
                <h3>SẢN PHẨM MỚI</h3>
            </div>
            <div className="products_main">
                <div className="products_grid">
                    {newProduct.map((element, index) => (
                        <div key={index} className="product_wrapper">
                            <span className="sale">-{element.discount}%</span>
                            <img src={element.thumbnail} alt="" />
                            <div className="info_product">
                                <Link to={`product/detail/${element._id}`} className="name">{element.name}</Link>
                                <span className="sold">
                                    Đã bán {element.stock_quantity}
                                </span>
                                <div className="item_row">
                                    <span className="sale_price"> {(element.price - (element.price * (element.discount / 100)))?.toLocaleString("vi-VN")} <u>đ</u></span>
                                    <span className="price">{element.price?.toLocaleString("vi-VN")} <u>đ</u></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="more_button">
                <button onClick={handleClick}>Xem thêm</button>
            </div>
        </div>
    );
};

export default NewProducts;
