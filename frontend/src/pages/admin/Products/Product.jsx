import { Link } from "react-router-dom";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { modalDelete } from "../../../components/admin/Swal"; 
import Swal from "sweetalert2";
import "./product.css"
import { getCookie } from "../../../utils/cookie";
function Product(props){
  const role = getCookie("role");
  const {data,handleDeleted,roleEmployee} = props;
 
  const handlDelete = ()=>{
    const modal =  modalDelete("Xác nhận xoá","Bạn muốn xoá sản phẩm này?");
    
    modal.then((result) => {
      if (result.isConfirmed) {
        handleDeleted(data._id)
        Swal.fire({
          title: "Xoá thành công",
          text: "Sản phẩm đã bị xoá",
          icon: "success",
        });
      }
    });
  }
    console.log("ok")
    return (
        <>
          <tr>
           
            <td>{data.position}</td>
            <td>
              <img
                src={data.thumbnail}
                alt="Sản phẩm"
              />
            </td>
            <td className="name" width={"40%"} ><div>{data.name}</div></td>
            <td className="price">{data.price}đ</td>
            <td>
              <div className={data.status === "active" ? "status-active" :"status-inactive"}>{data.status === "active" ? "Còn hàng" : "Hết hàng "}</div>
              </td>
              <td>
              <div className="icon-wrapper">
                {(role === "QTV" || roleEmployee.includes("update_product")) && <Link to={`edit/${data._id}`} className="edit-button"><FaRegEdit /></Link>}
                {(role === "QTV" || roleEmployee.includes("delete_product")) &&  <div onClick={handlDelete} className="delete-button"><FaRegTrashAlt  /></div>}
                 
              </div>
                
              </td>
            </tr>
        </>
    )
}

export default Product