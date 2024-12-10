import { getCookie } from "../../../utils/cookie"
import { Outlet,Navigate } from "react-router-dom";
function Private(){
    const token = getCookie("token");
    const role = getCookie("token");
    return (
        <>
        {(token && !role) ? <Outlet/> : <Navigate to={"/login"}/>}
        </>
    )
}
export default Private