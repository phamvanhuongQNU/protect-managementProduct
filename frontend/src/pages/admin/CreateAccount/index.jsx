import { useState } from "react";
import ModalCreate from "../../../components/admin/Modal";

function CreateAccount(){
    const [openModal,setOpenModal] = useState(false);
    const handleClose = () => setOpenModal(false);
    
    return (
        <>
            <button onClick={() =>{setOpenModal(true)}}>Thêm tài khoản</button>
            {openModal && <ModalCreate handleClose={handleClose}/>}
        </>
    )
}
export default CreateAccount;