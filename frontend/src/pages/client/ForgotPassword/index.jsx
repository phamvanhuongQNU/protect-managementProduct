import "./style.css";

import { Link } from "react-router-dom";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { changeData } from "../../../API/getAPI";
import ModalForgot from '../../../components/client/ModalForgot/index'

function ForgotPassword() {
  const [passHidden, setPassHidden] = useState(true);
  const [typeInput,setTypeInput] = useState("password");
  const [showMessage,setShowMessage] = useState("");
  const [openModal,setOpenModal] = useState(false)
  const [email,setEmail] = useState("");
  const handleClose = ()=>{
    setOpenModal(false)
  }
  const navigate = useNavigate();
  // Thay đổi trạng thấy hiện(ẩn) mật khẩu
  const handleCLick = () => {
    setPassHidden(!passHidden);
    typeInput === "password" ? setTypeInput("text") : setTypeInput("password");
  };


  // Nhấn nút đăng nhập
  const handleOnSubmit = (e)=>{
    e.preventDefault();
    const inputEmail = document.querySelector("[name = email]")
    
    const fetchApi = async()=>{
        const res = await changeData(`/forgot/${inputEmail.value}`,false)
        if (res.status === 200){
            
            setShowMessage("")
            setEmail(inputEmail.value)
            setOpenModal(true)
        }

        if(res.status === 404)
            setShowMessage(res.result.message)
    }

    fetchApi()
  }
  return (
    <>
      <body>
        <div className="page-forgot">
          <div className="section-forgot">
            <div className="background">
              <div className="shape"></div>
              <div className="shape"></div>
            </div>
            <div className="inner-wrap">
              <div className="inner-wrap__left">
                <div className="inner-wrap__left__content">
                  <div className="inner-wrap__left__content"></div>
                  <img
                    src="https://brandeps.com/icon-download/L/Lightning-icon-vector-07.svg"
                    className="inner-wrap__left__content__logo"
                    alt=""
                  ></img>
                  <h1 className="inner-wrap__left__content__title">
                    Chào mừng bạn đến với NIMUS
                  </h1>
                </div>
              </div>
              <div className="inner-wrap__right">
                <div className="inner-wrap__right__title">Quên mật khẩu</div>
                <form action="" className="form-forgot" method="" onSubmit={handleOnSubmit}>
                  <div className="form-forgot__box-input">
                    <input
                      className="forgot-input"
                      type="text"
                      name="email"
                      id="email"
                      placeholder=" "
                    />
                    <label className="forgot-label" htmlFor="email">
                      Email
                    </label>
                  </div>

                 
                  <p className="message">{showMessage}</p>
                
                    <button className="form-forgot__btn-forgot"  >Gửi</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {openModal && <ModalForgot email={email} handleClose={handleClose}/>}
      </body>
    </>
  );
}
export default ForgotPassword;
