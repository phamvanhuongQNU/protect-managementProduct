import { memo } from "react";
import { Outlet} from "react-router-dom";

function Authorization({token,role}){ 
    return (
        <>
        { (token && role === "QTV") ? <Outlet/> : <p>Bạn không có quyền truy cập</p>}

        </>
    )
}
export default memo( Authorization)