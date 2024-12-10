import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import {modalDelete} from "../../../components/admin/Swal/index"
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { getData } from "../../../API/getAPI";
function Account({handleDeleted,data,index,role,roleEmployee}){
  const [roleData,setRoleData] = useState("");

  const handlDelete = ()=>{
    const modal =  modalDelete("Xác nhận xoá","Bạn muốn xoá");
    modal.then((result) => {
      if (result.isConfirmed) {
        handleDeleted(data._id)
        Swal.fire({
          title: "Xoá thành công",
          text: "Người dùng đã bị xoá",
          icon: "success",
        });
      }
    });
  }
    useEffect(()=>{
        const fetchApi = async()=>{
          if (data.role_id){
          const res = await getData(`roles/${data.role_id}`)
          setRoleData(res.result.data.name)
            
          }
        }
        fetchApi()
    },[data.role_id])
    
    return(
        <>
        
              <tr key={data._id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{index + 1}</td>
                <td>{data.fullName}</td>
                <td>{data.email}</td>
                <td>{roleData}</td>
                <td>
                  {(role ==="QTV" || roleEmployee.includes("update_account")) && <Link to={`edit/${data._id}`} className="edit">
                    <FaRegEdit />
                  </Link>}

                 
                  {(role ==="QTV" || roleEmployee.includes("delete_account")) &&  <button className="delete-btn" onClick={handlDelete}>
                    <FaRegTrashAlt />
                  </button>}
                </td>
              </tr>
         
            </>
    )
}
export default Account