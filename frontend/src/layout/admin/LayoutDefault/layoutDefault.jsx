import {Outlet} from "react-router-dom"
import Header from "../Header/Header"
import TopBar from "../TopBar/TopBar"
import "./style.css"
function LayoutDefault(props){
    return(
        <>
             
                <div className="layout-container">
                    <Header/>
                    <main className="main-content-product">
                        <TopBar titlePage={props.titlePage}/>
                        <Outlet/>
                    </main>
                </div>
                
                
             
        </>
    )   
}
export default LayoutDefault