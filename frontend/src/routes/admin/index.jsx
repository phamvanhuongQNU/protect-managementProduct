import Products from "../../pages/admin/Products/Products";
import LayoutDefault from "../../layout/admin/LayoutDefault/layoutDefault";
import CreateProduct from "../../pages/admin/CreateProduct";
import EditProduct from "../../pages/admin/EditProduct";
import { Route, Routes } from "react-router-dom";
import Oder from "../../pages/admin/Oder/Oder";
import Account from "../../pages/admin/Account/Accounts";
import Category from "../../pages/admin/Category/Category";
import CreateAccount from "../../pages/admin/CreateAccount";
import EditAccount from "../../pages/admin/EditAccount/index";
import Permissions from "../../pages/admin/Permissions/index";
import Private from "../../components/admin/Private";
import Authorization from "../../components/admin/Authorization/index";
import { getCookie } from "../../utils/cookie";
import { useRef } from "react";
function RouteAdmin() {
  const token = useRef(getCookie("token")).current;
  const role = useRef(getCookie("role")).current;

  return (
    <Routes>
      <Route path="" element={<Private token={token} role={role} />}>
        <Route path="admin">
          <Route
            path="products"
            element={<LayoutDefault titlePage={"Danh sách sản phẩm"} />}
          >
            <Route
              path="category/:categoryId/create"
              element={<CreateProduct />}
            />
            <Route
              path="category/:categoryId/edit/:id"
              element={<EditProduct />}
            />
            <Route path="category/:categoryId" element={<Products />} />
            <Route path="create" element={<CreateProduct />} />
            <Route path="edit/:id" element={<EditProduct />} />
            <Route path="" element={<Products />} />
          </Route>
          <Route
            path="oder"
            element={<LayoutDefault titlePage="Danh sách đơn hàng" />}
          >
            <Route path="" element={<Oder />} />
          </Route>
          <Route
            path="account"
            element={<LayoutDefault titlePage="Danh sách tài khoản" />}
          >
            <Route path="" element={<Account />} />
            <Route path="create" element={<CreateAccount />} />
            <Route path="edit/:id" element={<EditAccount />} />
          </Route>
          <Route
            path="category"
            element={<LayoutDefault titlePage="Danh sách danh mục" />}
          >
            <Route path="" element={<Category />} />
          </Route>

          <Route
            path="permissions"
            element={<LayoutDefault titlePage="Phân quyền" />}
          >
            <Route
              path=""
              element={<Authorization token={token} role={role} />}
            >
              <Route path="" element={<Permissions />} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default RouteAdmin;
