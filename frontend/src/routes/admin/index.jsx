import Products from "../../pages/admin/Products/Products"
import LayoutDefault from "../../layout/admin/LayoutDefault/layoutDefault"
import CreateProduct from "../../pages/admin/CreateProduct";
import EditProduct from "../../pages/admin/EditProduct";
import { Route,Routes } from "react-router-dom";

function RouteAdmin(){
  return(
    
      <Routes>
        <Route path="admin">
          <Route  path="products" element={<LayoutDefault/>}>
            <Route  path=""  element={<Products/>}/>
            <Route path="create" element={<CreateProduct/>}/>
            <Route path="edit/:id" element={<EditProduct/>}/>
          </Route>
        </Route>
      </Routes>
    
    )
}


export default RouteAdmin;