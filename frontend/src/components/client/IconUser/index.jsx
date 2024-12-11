import { FaUser } from "react-icons/fa";
import {getData} from "../../../API/getAPI"

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCookie,eraseCookie } from "../../../utils/cookie";
function IconUser ({token}){
    const role = getCookie("role");
    const [fullName,setFullName ]= useState("")
  
    useEffect(()=>{
        const fetchApi =async ()=>{
            const res =await getData(`/user/detail/${token}`,false)
            if(res.status === 200)
                setFullName(res.result.data.fullName);  
            if (res.status === 404){
                eraseCookie("token")
            }
        }
        if(token && !role){
            fetchApi()
        }
    },[role,token])

    return (
        <>
        {fullName === "" ?  <Link to={"/login"}><FaUser className="icon" /></Link> : fullName }
        
        </>
    )
}
export default IconUser