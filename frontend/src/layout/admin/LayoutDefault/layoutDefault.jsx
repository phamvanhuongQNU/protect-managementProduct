import {Outlet} from "react-router-dom"
import Header from "../Header/Header"
import TopBar from "../TopBar/TopBar"
import "./style.css"
import { useState } from "react"

function LayoutDefault(){
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query) => {
        setSearchQuery(query);
        console.log("Từ khóa tìm kiếm:", query);
    }
    return(
        <>
             
                <div className="layout-container">
                    <Header/>
                    <main className="main-content-product">
                        <TopBar titlePage={"Danh sách sản phẩm"} onSearch={handleSearch}/>
                        <Outlet context={{ searchQuery }} />
                    </main>
                </div>
                
                
             
        </>
    )   
}
export default LayoutDefault