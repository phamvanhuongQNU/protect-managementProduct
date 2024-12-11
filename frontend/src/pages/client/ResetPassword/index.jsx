import "./style.css";

import { Link } from "react-router-dom";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import {  postData } from "../../../API/getAPI";
import { eraseCookie, getCookie } from "../../../utils/cookie";
import { modalSuccess } from "../../../components/client/Swal";

function ResetPassword() {
  const [passHidden, setPassHidden] = useState(true);
  const [typeInput,setTypeInput] = useState("password");
  const [showMessage,setShowMessage] = useState("");

  const navigate = useNavigate();
 
  // Thay đổi trạng thấy hiện(ẩn) mật khẩu
  const handleCLick = () => {
    setPassHidden(!passHidden);
    typeInput === "password" ? setTypeInput("text") : setTypeInput("password");
  };


  // Nhấn nút đăng nhập
  const handleOnSubmit = (e)=>{
    e.preventDefault();
    const inputNewPass = document.querySelector("input[name=newPassword]")
    const newPassword = inputNewPass.value;
    const inputRepeatPass = document.querySelector("input[name=repeatPassword]")
    const repeatPassword = inputRepeatPass.value;
    console.log(newPassword)
    console.log(repeatPassword)
    console.log(getCookie("email"))
    const body = {
      email : getCookie("email"),
      newPassword : newPassword,
      repeatPassword :repeatPassword
    }
    const fetchApi = async()=>{
      const res = await postData("/reset-password",body,false) 
      if (res.status === 200){
        modalSuccess("Đổi mật khẩu thành công")
        eraseCookie("email");
        setTimeout(()=>{
          navigate("/login");
        },2000)

      }
      if (res.status === 404){
        setShowMessage(res.result.message)
      }
    }
    fetchApi()
  }
  return (
    <>
      <body>
        <div className="page-reset-password">
          <div className="section-reset-password">
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
                <form action="" className="form-reset-password" method="" onSubmit={handleOnSubmit}>
                 
                  <div className="form-reset-password__box-input">
                    <input
                      className="reset-password-input input-password"
                      type= {typeInput}
                      name="newPassword"
                      id="password"
                      placeholder=" "
                      
                    />
                    <label className="reset-password-label" htmlFor="password">
                      Mật khẩu mới
                    </label>
                    <div className="reset-password-iconEye">
                      {passHidden ? (
                        <GoEyeClosed onClick={handleCLick} />
                      ) : (
                        <GoEye onClick={handleCLick} />
                      )}{" "}
                    </div>
                  </div>
                  <div className="form-reset-password__box-input">
                    <input
                      className="reset-password-input input-password"
                      type= {typeInput}
                      name="repeatPassword"
                      id="password"
                      placeholder=" "
                      
                    />
                    <label className="reset-password-label" htmlFor="password">
                      Nhập lại mật khẩu mới
                    </label>
                    <div className="reset-password-iconEye">
                      {passHidden ? (
                        <GoEyeClosed onClick={handleCLick} />
                      ) : (
                        <GoEye onClick={handleCLick} />
                      )}{" "}
                    </div>
                  </div>

                 
                  <p className="message">{showMessage}</p>
                
                    <button className="form-reset-password__btn-reset-password" onClick={handleOnSubmit}  >Gửi</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      
      </body>
    </>
  );
}
export default ResetPassword;
