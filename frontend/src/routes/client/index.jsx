import ProductDetail from "../../pages/client/DetailProduct/ProductDetail"
import LayoutDefault from "../../layout/client/layoutDefault/layoutDefault";
import Login from "../../pages/client/Login/index"
import { Route,Routes } from "react-router-dom";

function RouteClient(){
  return(
    
      <Routes>
        <Route path="/" element={<LayoutDefault/>}>
        <Route path="home" element={<ProductDetail/>}/>

          <Route path="product/detail" element={<ProductDetail/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    
    )
}


export default RouteClient;