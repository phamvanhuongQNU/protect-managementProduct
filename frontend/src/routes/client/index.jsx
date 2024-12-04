import ProductDetail from "../../pages/client/DetailProduct/ProductDetail";
import LayoutDefault from "../../layout/client/layoutDefault/layoutDefault";
import Login from "../../pages/client/Login/index";
import Cart from "../../pages/client/Cart/Cart";
import Checkout from "../../pages/client/Checkout/Checkout";
import Products from "../../pages/client/Products/Products";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/client/Home";

function RouteClient() {
  return (
    <Routes>
      {/* Layout mặc định */}
      <Route path="/" element={<LayoutDefault />}>
        <Route path="product/detail" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />{" "}
        <Route path="checkout" element={<Checkout />} />{" "}
        <Route path="products/category/:categoryId" element={<Products />}/>
        <Route path="products" element={<Products />} />{" "}
        <Route path="" element={<Home />} />{" "}
        {/* Route mới cho trang Cart */}
      </Route>

      {/* Route riêng không sử dụng LayoutDefault */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default RouteClient;
