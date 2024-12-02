import React from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Categories.css";

const Categories = () => {
    const categoriesData = Array(5).fill({
        title: "Đồ chơi",
        img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnmfhlpiqui573.webp",
        quantity: "30",
    });

    return (
        <div className="categories_column">
            <div className="categories_title">
                <h3>DANH MỤC</h3>
            </div>
            <div className="categories_main">
                <div className="categories_flex">
                    {categoriesData.map((element, index) => (
                        <div key={index} className="categories_wrapper">
                            <img src={element.img} alt="img" />
                            <div className="column_item">
                                <p className="name">{element.title}</p>
                                <span className="quantity">
                                    {element.quantity} sản phẩm
                                </span>
                            </div>
                            <div className="arrow_right">
                                <FiArrowRight />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="arrow_button">
                <div className="left">
                    <FiChevronLeft />
                </div>
                <div className="item_num">1/9</div>
                <div className="right">
                    <FiChevronRight />
                </div>
            </div>
        </div>
    );
};

export default Categories;
