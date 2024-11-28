import ProductDetail from "../../pages/client/DetailProduct/ProductDetail";
import LayoutDefault from "../../layout/client/layoutDefault/layoutDefault";
import Login from "../../pages/client/Login/index";
import Cart from "../../pages/client/Cart/Cart";
import Checkout from "../../pages/client/Checkout/Checkout";
import { Route, Routes } from "react-router-dom";

function RouteClient() {
  return (
    <Routes>
      {/* Layout mặc định */}
      <Route path="/" element={<LayoutDefault />}>
        <Route path="product/detail" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />{" "}
        <Route path="checkout" element={<Checkout />} />{" "}
        {/* Route mới cho trang Cart */}
      </Route>

      {/* Route riêng không sử dụng LayoutDefault */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default RouteClient;
