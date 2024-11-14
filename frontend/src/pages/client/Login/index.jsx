import "./style.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <body>
        <div className="page-login">
        
          <div className="section-login">
          <div className="background">
            <div class="shape"></div>
            <div class="shape"></div>
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
                <form action="" className="inner-wrap__right__form-login">
                  <label htmlFor="email">Email</label>
                  <div className="inner-wrap__right__form-login__email">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <label htmlFor="password">Email</label>
                  <div className="inner-wrap__right__form-login__password">
                    <input
                      type="text"
                      name="password"
                      id="password"
                      placeholder="Mật Khẩu"
                    />
                  </div>
                  <Link
                    to={"forgot-password"}
                    className="inner-wrap__right__form-login__forgot-password"
                  >
                    Quên mật khẩu
                  </Link>
                  <div>
                    <input
                      type="submit"
                      name="login"
                      id="login"
                      className="inner-wrap__right__form-login__btn-login"
                      value={"Đăng Nhập"}
                    />
                    <Link className="inner-wrap__right__form-login__btn-register" to={"register"}>Đăng kí</Link>
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
