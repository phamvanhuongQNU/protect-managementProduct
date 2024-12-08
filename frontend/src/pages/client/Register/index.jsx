import "./style.css";

import { GoEye, GoEyeClosed } from "react-icons/go";
import { useState } from "react";
import {postData} from "../../../API/getAPI"
import ModalOTP from '../../../components/client/ModalOTP/index'
function Register() {
  const [passHidden, setPassHidden] = useState(true);
  const [typeInput,setTypeInput] = useState("password");
  const [showMessage,setShowMessage] = useState("");
  const [openModal,setOpenModal] = useState(false)
  const [data,setData] = useState({});
  const handleClose = ()=>{
    setOpenModal(false)
  }

  // Thay đổi trạng thấy hiện(ẩn) mật khẩu
  const handleCLick = () => {
    setPassHidden(!passHidden);
    typeInput === "password" ? setTypeInput("text") : setTypeInput("password");
  };

  // Nhấn nút đăng kí
  const handleOnSubmit = (e)=>{
    e.preventDefault();
    const inputFullName = document.querySelector("[name = fullName]")
    const inputEmail = document.querySelector("[name = email]")
    const inputPassword = document.querySelector("[name = password]")
    const inputRepeatPassword = document.querySelector("[name = repeatPassword]")
     const body = {
       email : inputEmail.value,
       password : inputPassword.value,
       fullName : inputFullName.value,
       repeatPassword : inputRepeatPassword.value
     }
     const fectchApi = async ()=>{
      const result = await postData("/register",body,false);
      if (result.status === 200){
        setOpenModal(true)
        setData(body);
        setShowMessage("")
      }
      if (result.status === 404){
        setShowMessage(result.result.message);
      }
     }
     fectchApi()
    
    } 
  return (
    <>
      <body>
        <div className="page-register">
          <div className="section-register">
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
                <div className="inner-wrap__right__title">Đăng Kí</div>
                <form action="" className="form-register" method="" onSubmit={handleOnSubmit}>
                <div className="form-register__box-input">
                    <input
                      className="register-input"
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder=" "
                    />
                    <label className="register-label" htmlFor="email">
                      Họ và tên
                    </label>
                  </div>
                  <div className="form-register__box-input">
                    <input
                      className="register-input"
                      type="text"
                      name="email"
                      id="email"
                      placeholder=" "
                    />
                    <label className="register-label" htmlFor="email">
                      Email
                    </label>
                  </div>

                  <div className="form-register__box-input">
                    <input
                      className="register-input input-password"
                      type= {typeInput}
                      name="password"
                      id="password"
                      placeholder=" "
                      
                    />
                    <label className="register-label" htmlFor="password">
                      Mật khẩu
                    </label>
                    <div className="register-iconEye">
                      {passHidden ? (
                        <GoEyeClosed onClick={handleCLick} />
                      ) : (
                        <GoEye onClick={handleCLick} />
                      )}{" "}
                    </div>
                    
                    
                    
                  </div>
                  <div className="form-register__box-input">
                    <input
                      className="register-input input-password"
                      type= {typeInput}
                      name="repeatPassword"
                      id="password"
                      placeholder=" "
                      
                    />
                    <label className="register-label" htmlFor="password">
                      Nhập lại mật khẩu
                    </label>
                    <div className="register-iconEye">
                      {passHidden ? (
                        <GoEyeClosed onClick={handleCLick} />
                      ) : (
                        <GoEye onClick={handleCLick} />
                      )}{" "}
                    </div>
                  </div>
                  <p className="message">{showMessage}</p>
                 
                  <div>
                    <input
                      type="submit"
                      name="register"
                      id="register"
                      className="form-register__btn-register"
                      value={"Đăng kí"}
                    />
                   
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {openModal && <ModalOTP data={data} handleClose={handleClose}/>}
      </body>
    </>
  );
}

export default Register;
