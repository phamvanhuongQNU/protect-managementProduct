import { useEffect, useState } from "react";
import { Outlet} from "react-router-dom";
import { getData } from "../../../API/getAPI";
function Authorization({token,role}){
    const [roleData,setRoleData] = useState("");
    useEffect(()=>{
        
        const fetchApi = async()=>{
            const res =await getData(`roles/role/${token}`);
            console.log(res.result.data.permissions)
            setRoleData(res.result.data._id)
        }
        fetchApi();
    },[])
    console.log(roleData)
    return (
        <>
        { (token && role === "QTV") ? <Outlet/> : <p>Bạn không có quyền truy cập</p>}

        </>
    )
}
export default Authorization