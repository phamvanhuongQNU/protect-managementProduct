import { useEffect, useState } from "react";
import './style.css'
import Table from "react-bootstrap/Table";
import {getData,updateData} from '../../../API/getAPI'
import Button from 'react-bootstrap/Button';
import {modalSuccess} from '../../../components/admin/Swal/index'
function Permissions() {
    const [dataPermissions,setDataPermissions] = useState([]);
    const [roleEmployee,setRoleEmployee] = useState([]);
    // sự kiện nhấn nút checked
    const handlChange = (e)=>{
        const check = e.target.checked;
        let newPermission = [...dataPermissions]
        if (check){
            newPermission.push(e.target.id)
            setDataPermissions(newPermission)
        }else{
            newPermission = newPermission.filter(item => item !== e.target.id)
            setDataPermissions(newPermission)
        }
        
    }
    // Sự kiện nhấn nút lưu
    const handleSave = ()=>{
        const body = {
            permissions : dataPermissions
        }
        const fetchApi = async () => {
            const res = await updateData(`roles/update/${roleEmployee._id}`,body)
            if (res.status === 200){
                modalSuccess("Lưu thành công")
            }else{
                console.log(res.status)
            }
          };
          fetchApi();
    } 

 
    useEffect(()=>{
        const fetchApi = async () => {
            const roles  = await getData("roles/NV")
            setRoleEmployee(roles.result.data)
            setDataPermissions(roles.result.data.permissions)
          };
          fetchApi();
    },[])
    return (
   
    <>
     <div className="permission-container">
     <div className="title">Nhân viên</div>
      {dataPermissions && 
      <Table className="employee" striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Xem</th>
            <th>Thêm</th>
            <th>Sửa</th>
            <th>Xoá</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sản phẩm</td>
            <td>
              <input type="checkbox" id={"read_product"} checked={[...dataPermissions].includes("read_product")} onChange={handlChange}/>
            </td>
            <td>
              <input type="checkbox" id={"add_product"} checked={[...dataPermissions].includes("add_product")} onChange={handlChange}/>
            </td>
            <td>
              <input type="checkbox" id={"update_product"} checked={[...dataPermissions].includes("update_product")} onChange={handlChange}/>
            </td>
            <td>
              <input type="checkbox" id={"delete_product"} checked={[...dataPermissions].includes("delete_product")} onChange={handlChange}/>
            </td>
          </tr>
          <tr>
            <td>Tài khoản</td>
            <td>
              <input type="checkbox" id={"read_account"} checked={[...dataPermissions].includes("read_account")} onChange={handlChange}/>
            </td>
            <td>
              <input type="checkbox" id={"add_account"} checked={[...dataPermissions].includes("add_account")} onChange={handlChange}/>
            </td>
            <td>
              <input type="checkbox" id={"update_account"} checked={[...dataPermissions].includes("update_account")} onChange={handlChange}/>
            </td>
            <td>
              <input type="checkbox" id={"delete_account"} checked={[...dataPermissions].includes("delete_account")} onChange={handlChange}/>
            </td>
          </tr>
          <tr>
            <td>Danh mục</td>
            <td>
              <input type="checkbox" id={"read_category"} checked={[...dataPermissions].includes("read_category")} onChange={handlChange}/>
            </td>
            <td>
              <input type="checkbox" id={"add_category"} checked={[...dataPermissions].includes("add_category")} onChange={handlChange}/>
            </td>
            <td>
              <input type="checkbox" id={"update_category"} checked={[...dataPermissions].includes("update_category")} onChange={handlChange}/>
            </td>
            <td>
              <input type="checkbox" id={"delete_category"} checked={[...dataPermissions].includes("delete_category")} onChange={handlChange}/>
            </td>
          </tr>
        </tbody>
      </Table>
    }
    <Button variant="primary" onClick={handleSave}>Lưu</Button>
     </div>
    </>
  );
}
export default Permissions;
