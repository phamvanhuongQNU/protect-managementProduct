import "./style.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import {modalSuccess} from '../../../components/client/Swal/index'
import { IoArrowBackSharp } from "react-icons/io5";
import { postData } from "../../../API/getAPI";
import {useNavigate} from 'react-router-dom';
import {setCookie} from '../../../utils/cookie'


export default function ModalForgot({ handleClose,email }) {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [dataOtp,setDataOtp] = useState("")
  const [showMessage,setShowMessage] = useState("");
  const handlChange = (element, index) => {
    const value = element.value;
    if (!value) return;
    // Thay đổi giá của input
    if (value.match(/^\d+/)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setDataOtp(newOtp.join(""));
    }
    // Khi nhập một số thì chuyển sang input tiếp theo
    if (index < 5 && value && value.match(/^\d+/)) {
      element.nextSibling.focus();
    }
  };

  const handleBackspace = (element, index) => {
    const newOtp = [...otp];
    newOtp[index] = "";
    setOtp(newOtp);
    setDataOtp(newOtp.join(""));
    // Focus về các input trước
    if (index > 0) {
      element.previousSibling.focus();
      
    }
  };
  // nhấn nút gửi otp
  const handleClick = ()=>{
    const body = {
      otp : dataOtp,
      email : email
    }
    const fetchApi =async ()=>{
      const res = await postData("/forgotOtp",body,false);

      if (res.status === 200){
        modalSuccess("Thành công");
        setCookie("email", email,1)
        setTimeout(()=>{
          navigate(`/reset-password`);
        },2000)
        
       
      }
      if(res.status === 404){
        setShowMessage(res.result.message);
      }
    } 
    fetchApi()
  }
  return (
    <>
      <Modal show={true} animation={false}>
        <Modal.Body>
          <IoArrowBackSharp onClick={handleClose} className="button-back" />
          <div className="otp-card">
            <h1 className="title">XÁC THỰC OTP</h1>
            <div className="notification">Chúng tôi đã gửi mã xác thực cho bạn qua email <b>{email}</b>.Mã xác thực có tác dụng trong 2 phút.</div>
            <div className="otp-card-inputs">
              {otp.map((data, index) => (
                <input
                  type="text"
                  key={index}
                  maxLength={1}
                  className=""
                  value={data}
                  onChange={(e) => {
                    handlChange(e.target, index);
                  }}
                  onKeyDown={(e) => {
                    // Nếu nhấn nút backbspace
                    if (e.key === "Backspace") {
                      handleBackspace(e.target, index);
                    }
                  }}
                />
              ))}
            </div>
            <p className="message message-margin-left">{showMessage}</p>
            {/* <div className="otp-resend">Nếu bạn chưa nhận được mã <a href="">Gửi lại</a></div> */}
            <button className="button-send-otp" onClick={handleClick}>Gửi</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
