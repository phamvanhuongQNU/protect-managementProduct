import React from "react";
import "./style.css"
import Categories from "../../../components/client/Home/Categories/Categories";
import NewProducts from "../../../components/client/Home/NewProducts/NewProducts";
import FeaturedProducts from "../../../components/client/Home/FeaturedProducts/FeaturedProducts";

const Home = () => {
    return <div className="home_container">
        <div className="category_container">
            <Categories />
        </div>
        <div className="new-product_container">
            <NewProducts />
        </div>
        <div className="featured-product_container">
           <FeaturedProducts /> 
        </div>
    </div>;
};

export default Home;
