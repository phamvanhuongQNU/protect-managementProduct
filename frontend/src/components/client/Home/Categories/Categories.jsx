import React, { useEffect, useState } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {Link} from 'react-router-dom'
import "./Categories.css";
import {getData} from "../../../../API/getAPI"
const Categories = () => {
  
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        const fetchApi = async()=>{
            const res = await getData("/categories",false);
          
            setCategories(res.result);
        }
        fetchApi();
    },[])
    return (
        <div className="categories_column">
            <div className="categories_title">
                <h3>DANH MỤC</h3>
            </div>
            <div className="categories_main">
                <div className="categories_flex">
                    {categories.map((element, index) => (
                        <Link to={`products/category/${element._id}`} key={index} className="categories_wrapper">
                            <img src={element.thumbnail} alt="img" />
                            <div className="column_item">
                                <p className="name">{element.title}</p>
                                <span className="quantity">
                                    {element.totalProducts} sản phẩm
                                </span>
                            </div>
                            <div className="arrow_right">
                                <FiArrowRight />
                            </div>
                        </Link>
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
