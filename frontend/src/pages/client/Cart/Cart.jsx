import React, { useEffect, useState } from "react";
import CartItemList from "../../../components/client/page-Cart/CartItemList";
import OrderSummaryDetails from "../../../components/client/page-Cart/OrderSummaryDetail";
import { deleteData, getData } from "../../../API/getAPI";
import { getCookie } from "../../../utils/cookie";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const token = getCookie("token");
  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [checkedItems, setCheckedItems] = useState({});
  const navigate = useNavigate();

  const calculateTotal = (products) => {
    const total = products.reduce(
      (sum, product) => {
        if (checkedItems[product._id]) {
          return sum + product.price * product.quanlity
        }
        return sum;
      }, 0);
    setTotalAmount(total);
  };

  // Sự kiện xoá sản phẩm
  const handleDelete = (product_id) => {
      const fetchApi = async () => {
        const res = await deleteData(`/cart/${token}/${product_id}`, false);
        setProducts(res.result.data);
      }
      fetchApi();
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    const updatedProducts = products.map((product) =>
      product._id === id ? { ...product, quanlity: newQuantity } : product
    );
    setProducts(updatedProducts);
    calculateTotal(updatedProducts); // Cập nhật tổng tiền
  };

  const handleCheckboxChange = (id) => {         setCheckedItems((prev) => {
      const newCheckedItems = { ...prev, [id]: !prev[id] };
      calculateTotal(products);
      return newCheckedItems;
    });
  }

  const handleCheckout = () => {
    const selectedProducts = products.filter(
      (product) => checkedItems[product._id]
    );
    navigate("/checkout", { state: { selectedProducts } });
  };

  useEffect(()=>{
      const fetchApi =async ()=>{
        const res = await getData(`/cart/${token}`,false);
     
        if (res.result.data){
          setProducts(res.result.data);

          const initialCheckedItems = res.result.data.reduce((acc, product) => {
            acc[product._id] = false;
            return acc;
          }, {});
          setCheckedItems(initialCheckedItems);

          calculateTotal(res.result.data);
        }
      }
      fetchApi()   
  },[token])
  
  useEffect(() => {
    calculateTotal(products);
  }, [checkedItems]);
  return (
    <div className="Cart">
      <div className="breadcrum">
        <span>Trang chủ</span> &gt; <span>Giỏ hàng</span>
      </div>
      <div className="order-summary">
        <div className="order-items">
          <h1>Giỏ hàng</h1>
          <CartItemList
            products={products}
            handleDelete={handleDelete}
            handleUpdateQuantity={handleUpdateQuantity}
            handleCheckboxChange={handleCheckboxChange}
            checkedItems={checkedItems}
          />
        </div>
        <OrderSummaryDetails
          totalAmount={totalAmount}
          handleCheckout={handleCheckout}
        />
      </div>
    </div>
  );
};

export default Cart;
