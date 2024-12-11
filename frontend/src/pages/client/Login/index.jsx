import "./style.css";

import { Link } from "react-router-dom";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useState } from "react";
import {postData,getData} from "../../../API/getAPI"
import {useNavigate} from 'react-router-dom'
import {setCookie,getCookie,eraseCookie} from '../../../utils/cookie'

function Login() {
  const [passHidden, setPassHidden] = useState(true);
  const [typeInput,setTypeInput] = useState("password");
  const [showMessage,setShowMessage] = useState("");
  const navigate = useNavigate();
  // Thay đổi trạng thấy hiện(ẩn) mật khẩu
  const handleCLick = () => {
    setPassHidden(!passHidden);
    typeInput === "password" ? setTypeInput("text") : setTypeInput("password");
  };
  if(getCookie("role")){
    eraseCookie("role")
  }
  if(getCookie("token")){
    eraseCookie("token")
  }
  // Nhấn nút đăng nhập
  const handleOnSubmit = (e)=>{
    e.preventDefault();
    const inputEmail = document.querySelector("[name = email]")
    const inputPassword = document.querySelector("[name = password]")
    const body = {
      email : inputEmail.value,
      password : inputPassword.value
    }
    const fetchApi = async()=>{
      const res = await postData("/login",body,false);
      if(res.status !== 200){
        inputEmail.value = "";
        inputPassword.value = "";
        setShowMessage(res.result.message)
        return;
      }
      setCookie("token",res.result.data.token,1);
      // Kiểm tra phân quyền
      const dataResult = await getData(`/user/detail/${getCookie("token")}`,false)
      if (dataResult.status === 200){
        // Nếu là tài khoản admin thì chuyển sang trang admin và ngược lại
        if(dataResult.result.data.role_id){
          setCookie("role",dataResult.result.data.role_id,1);
          navigate("/admin/account")
          window.location.reload();
        }else{
          navigate("/")
          navigate("/admin/account")
        }
      }
    }
    fetchApi()
    
  }


  return (
    <>
      <body>
        <div className="page-login">
          <div className="section-login">
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
                <div className="inner-wrap__right__title">Đăng Nhập</div>
                <form action="" className="form-login" method="" onSubmit={handleOnSubmit}>
                  <div className="form-login__box-input">
                    <input
                      className="login-input"
                      type="text"
                      name="email"
                      id="email"
                      placeholder=" "
                    />
                    <label className="login-label" htmlFor="email">
                      Email
                    </label>
                  </div>

                  <div className="form-login__box-input">
                    <input
                      className="login-input input-password"
                      type= {typeInput}
                      name="password"
                      id="password"
                      placeholder=" "
                      
                    />
                    <label className="login-label" htmlFor="password">
                      Mật khẩu
                    </label>
                    <div className="login-iconEye">
                      {passHidden ? (
                        <GoEyeClosed onClick={handleCLick} />
                      ) : (
                        <GoEye onClick={handleCLick} />
                      )}{" "}
                    </div>
                  </div>
                  <p className="message">{showMessage}</p>
                  <Link
                    to={"/forgot-password"}
                    className="form-login__forgot-password"
                  >
                    Quên mật khẩu
                  </Link>
                  <div>
                    <input
                      type="submit"
                      name="login"
                      id="login"
                      className="form-login__btn-login"
                      value={"Đăng Nhập"}
                    />
                    <div>
                      Bạn chưa có tài khoản?{" "}
                      <Link
                        className="form-login__btn-register"
                        to={"/register"}
                      >
                        Đăng kí
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
export default Login;
