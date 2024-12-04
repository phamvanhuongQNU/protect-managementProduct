
import "./FeaturedProducts.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BiShoppingBag } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import {getData} from "../../../../API/getAPI"
const FeaturedProducts = () => {
    const featuredProducts = Array(8).fill({
        name: "Bàn phím cơ Epomaker RT65",
        price: "1,600,000 đ",
        sales: "20",
        sold: "200",
        img: "https://bizweb.dktcdn.net/100/329/122/products/ban-phim-co-khong-day-logitech-g515-lightspeed-tkl-002.jpg?v=1728376160827",
    });
    const [featuredProduct,setFeaturedProduct] = useState([]);


    useEffect(()=>{
        const fetchApi = async ()=>{
            const res = await getData(`/products/outstanding`,false);
            setFeaturedProduct(res.result)
        }
        fetchApi();
    },[])
    return (
        <div className="featured_products">
            <div className="top_header">
                <h3>Sản phẩm nổi bật</h3>
                <div className="arrow_button">
                    <div className="left">
                        <FiChevronLeft />
                    </div>
                    <div className="right">
                        <FiChevronRight />
                    </div>
                </div>
            </div>
                <div className="products_flex">
                    {featuredProduct.map((element, index) => (
                        <div key={index} className="ftproduct_wrapper">
                            <span className="sale">-{element.discount}%</span>
                            <div className="img_container"><img src={element.thumbnail} alt="" />
                            <div className="btn_cart">
                                <BiShoppingBag />
                            </div>
                            </div>
                            <div className="info_product">
                                <p className="name">{element.name}</p>
                                <span className="sold">
                                    Đã bán {element.stock_quantity}
                                </span>
                                <div className="item_row">
                                    <span className="sale_price">{element.price}đ</span>
                                    <span className="price">{element.price - (element.price * (element.discount / 100))}đ</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default FeaturedProducts;
