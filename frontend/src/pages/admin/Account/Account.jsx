import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import {modalDelete} from "../../../components/admin/Swal/index"
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function Account({handleDeleted,data,index}){


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
    return(
        <>
        
              <tr key={data._id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{index + 1}</td>
                <td>{data.fullName}</td>
                <td>{data.email}</td>
                <td>{data.role}</td>
                <td>
                  <Link to={`edit/${data._id}`} className="edit">
                    <FaRegEdit />
                  </Link>

                  <button className="delete-btn" onClick={handlDelete}>
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
         
            </>
    )
}
export default Account