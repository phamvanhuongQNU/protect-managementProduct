import { getCookie } from "../../../utils/cookie"
import { Outlet,Navigate } from "react-router-dom";
function Private(){
    const token = getCookie("token");
    return (
        <>
        {token ? <Outlet/> : <Navigate to={"/login"}/>}
        </>
    )
}
export default Private