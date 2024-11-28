import Products from "../../pages/admin/Products/Products";
import LayoutDefault from "../../layout/admin/LayoutDefault/layoutDefault";
import CreateProduct from "../../pages/admin/CreateProduct";
import EditProduct from "../../pages/admin/EditProduct";
import { Route, Routes } from "react-router-dom";
import Oder from "../../pages/admin/Oder/Oder";
import Account from "../../pages/admin/Account/Account";
import Category from "../../pages/admin/Category/Category";

function RouteAdmin() {
  return (
    <Routes>
      <Route path="admin">
        <Route path="products" element={<LayoutDefault />}>
          <Route path="category/:categoryId" element={<Products />} />
          <Route path="" element={<Products />} />
          <Route path="create" element={<CreateProduct />} />
          <Route path="edit/:id" element={<EditProduct />} />
        </Route>
        <Route path="oder" element={<LayoutDefault />}>
          <Route path="" element={<Oder />} />
        </Route>
        <Route path="account" element={<LayoutDefault />}>
          <Route path="" element={<Account />} />
        </Route>
        <Route path="category" element={<LayoutDefault />}>
          <Route path="" element={<Category />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default RouteAdmin;
