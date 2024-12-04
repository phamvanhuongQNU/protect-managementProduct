import "./ProductDetail.css";
import CountSLSP from "../../../components/client/CountSLSP";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../../../API/getAPI";
import DOMPurify from 'dompurify';
const ProductDetail = () => {
  const { dem, tang, giam } = CountSLSP();
  const {id} = useParams();
  const [dataProduct,setDataProduct] = useState({});
  const [urlImage,setUrlImage] = useState("");
  // Sự kiện nhấn ảnh
  const handleClick = (e)=>{
      setUrlImage(e.target.src);
  }
  useEffect(()=>{
    const fetchApi = async ()=>{


      const res = await getData(`/products/detail/${id}`,false);
      setDataProduct(res.result)
      setUrlImage(res.result.thumbnail);
  }
  fetchApi();
  },[id])
  console.log(dataProduct)
  return (
    <div className="layout-wrapper">
      <main className="main-content">
        <div className="container">

          <div className="product-container">
            {/* Product Images */}
            <div className="product-images">
              <div className="main-image">
                <img
                  src={urlImage}
                  alt=""
                />
              </div>
              <div className="thumbnail-images">
              <img alt="" onClick={handleClick}  className="thumbnail" src={dataProduct.thumbnail}></img>
              { dataProduct.images && [...dataProduct.images].map((item)=> <img alt="" onClick={handleClick}  className="thumbnail" src={item}></img>)}
              
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <h1 className="product-title">
                {/* YUNZII YZ75 75% Hot Swappable Wireless Gaming Mechanical
                Keyboard, RGB Backlights, BT5.0/2.4G/USB-C, Dye Sub PBT Keycaps
                for Linux/Win/Mac(Gateron G Pro Brown, White) */}
                {dataProduct.name}
              </h1>
              <div className="product-price">
                <span className="original-price">
                  <del>{dataProduct.price}đ</del>
                </span>
                <span className="sale-price">{dataProduct.price - (dataProduct.price * (dataProduct.discount / 100))}đ</span>
              </div>
              <div className="product-sold">{dataProduct.stock_quanlity}</div>
              <div className="product-options">
                <div className="quantity-selector">
                  <span>Số lượng:</span>
                  <button onClick={giam} disabled={dem === 1}>
                    -
                  </button>
                  <input type="text" value={dem} disabled />
                  <button onClick={tang}>+</button>
                </div>
              </div>
              <div className="product-actions">
                <button className="add-to-cart-btn">THÊM VÀO GIỎ</button>
                <button className="buy-now-btn">MUA NGAY</button>
              </div>
            </div>
          </div>

          <div className="product-description">
            <h2>MÔ TẢ SẢN PHẨM</h2>
            <p  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(dataProduct.description) }}>
             
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
