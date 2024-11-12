import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
function LayoutDefault() {
  return (
    <>
      <Header />
      <div className="layout__default">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
export default LayoutDefault;
