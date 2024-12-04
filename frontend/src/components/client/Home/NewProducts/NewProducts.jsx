import React from "react";
import { Link } from "react-router-dom";
import "./NewProducts.css";

const NewProducts = () => {
    const newProducts = Array(8).fill({
        name: "Bàn phím cơ Epomaker RT65",
        price: "1,600,000 đ",
        sales: "20",
        sold: "200",
        img: "https://epomaker.com/cdn/shop/files/IMG_7943_aa3a4f64-4c10-4f1b-aa7e-06f2d447dce2.png?v=1729567413&width=360",
    });
    return (
        <div className="new_products">
            <div className="products_title">
                <h3>SẢN PHẨM MỚI</h3>
            </div>
            <div className="products_main">
                <div className="products_grid">
                    {newProducts.map((element, index) => (
                        <div key={index} className="product_wrapper">
                            <span className="sale">-{element.sales}%</span>
                            <img src={element.img} alt="" />
                            <div className="info_product">
                                <p className="name">{element.name}</p>
                                <span className="sold">
                                    Đã bán {element.sold}
                                </span>
                                <div className="item_row">
                                    <span className="sale_price">{element.price}</span>
                                    <span className="price">1,920,000 đ</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="more_button">
                <Link>Xem thêm</Link>
            </div>
        </div>
    );
};

export default NewProducts;
