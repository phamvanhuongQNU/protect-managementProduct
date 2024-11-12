import ProductDetail from "../../pages/client/DetailProduct/ProductDetail"
import LayoutDefault from "../../layout/client/layoutDefault/layoutDefault";
import { Route,Routes } from "react-router-dom";

function RouteClient(){
  return(
    
      <Routes>
        <Route path="/" element={<LayoutDefault/>}>
          <Route path="product/detail" element={<ProductDetail/>}/>
        </Route>
      </Routes>
    
    )
}


export default RouteClient;