import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer,Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function LayoutDefault() {
  return (
    <>
      <Header />
      <div className="layout__default">
        <Outlet />
      </div>
      <ToastContainer limit={1} autoClose={1000} transition={Flip} pauseOnHover={false}/>
      <Footer />
    </>
  );
}
export default LayoutDefault;
