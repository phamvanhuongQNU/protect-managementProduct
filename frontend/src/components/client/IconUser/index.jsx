import { FaUser } from "react-icons/fa";
import {getData} from "../../../API/getAPI"

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function IconUser ({token}){
   
    const [fullName,setFullName ]= useState("")
  
    useEffect(()=>{
        const fetchApi =async ()=>{
            const res =await getData(`/user/detail/${token}`,false)
            setFullName(res.result.data.fullName);
        }
        if(token){
            fetchApi()
        }
    },[token])
    return (
        <>
        {fullName === "" ?  <Link to={"/login"}><FaUser className="icon" /></Link> : fullName }
        
        </>
    )
}
export default IconUser