import React from "react";
<<<<<<< HEAD
import "./style.css";
import Categories from "../../../components/client/Home/Categories";
import NewProducts from "../../../components/client/Home/NewProducts";
import FeaturedProducts from "../../../components/client/Home/FeaturedProducts";
import CustomSlider from "../../../components/client/Home/CustomSlider";
import images from "../../../data/Images";
=======
import "./style.css"
import Categories from "../../../components/client/Home/Categories/Categories";
import NewProducts from "../../../components/client/Home/NewProducts/NewProducts";
import FeaturedProducts from "../../../components/client/Home/FeaturedProducts/FeaturedProducts";
>>>>>>> b36bdbdab70f053dae19b5d6bc9f0f4c4f4b198e

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
