import React from "react";
import "./style.css";
import Categories from "../../../components/client/Home/Categories/Categories";
import NewProducts from "../../../components/client/Home/NewProducts/NewProducts";
import FeaturedProducts from "../../../components/client/Home/FeaturedProducts/FeaturedProducts";
import CustomSlider from "../../../components/client/Home/CustomSlider/CustomSlider";
import images from "../../../data/Images";

const Home = () => {
    return <div className="home_container">
        <CustomSlider>
            {images.map((image, index) => {
                return <img key={index} src={image.imgURL} alt={image.imgAlt} />
            })}
        </CustomSlider>
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
