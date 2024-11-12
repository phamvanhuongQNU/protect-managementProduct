import {Outlet} from "react-router-dom"
import Header from "../Header/Header"
import TopBar from "../TopBar/TopBar"
import "./style.css"
function LayoutDefault(){
    return(
        <>
              <div className="layout_default">
                <div className="layout-container">
                    <Header/>
                    <main className="main-content-product">
                        <TopBar titlePage={"Danh sách sản phẩm"}/>
                        <Outlet/>
                    </main>
                </div>
                
                
              </div>
        </>
    )   
}
export default LayoutDefault