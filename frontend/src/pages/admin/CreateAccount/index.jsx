import { useState } from "react";
import ModalCreate from "../../../components/admin/Modal";
import { modalCreate, modalSuccess } from "../../../components/admin/Swal";
import { useNavigate } from "react-router";
function CreateAccount(){
    let navigate = useNavigate();
    const [openModal,setOpenModal] = useState(false);
    const handleClose = () => setOpenModal(false);
    const hanleCLick = ()=>{
        modalSuccess("Thêm thành công")
        setTimeout(()=>{
            navigate(-1)
        },1000)

    }
    return (
        <>
            <button onClick={() =>{setOpenModal(true)}}>Thêm tài khoản</button>
            {openModal && <ModalCreate handleClose={handleClose}/>}
            <button onClick={hanleCLick}>Thêm tài khoản</button>

          
        </>
    )
}
export default CreateAccount;