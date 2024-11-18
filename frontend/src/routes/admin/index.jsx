import Products from "../../pages/admin/Products/Products";
import LayoutDefault from "../../layout/admin/LayoutDefault/layoutDefault";
import CreateProduct from "../../pages/admin/CreateProduct";
import { Route, Routes } from "react-router-dom";
import Oder from "../../pages/admin/Oder/Oder";
import Account from "../../pages/admin/Account/Account";
function RouteAdmin() {
  return (
    <Routes>
      <Route path="admin">
        <Route path="products" element={<LayoutDefault />}>
          <Route path="" element={<Products />} />
          <Route path="create" element={<CreateProduct />} />
        </Route>
        <Route path="oder" element={<LayoutDefault />}>
          <Route path="" element={<Oder />} />
        </Route>
        <Route path="account" element={<LayoutDefault />}>
          <Route path="" element={<Account />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default RouteAdmin;
