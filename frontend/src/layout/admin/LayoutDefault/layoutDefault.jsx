import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import TopBar from "../TopBar/TopBar";
import "./style.css";
import { useState, useEffect, useRef,memo } from "react";
import { getData } from "../../../API/getAPI";
import { getCookie,setCookie,eraseCookie } from "../../../utils/cookie";
import { useNavigate } from "react-router-dom";
function LayoutDefault({ titlePage }) {
  const navigate = useNavigate()
  const token = useRef(getCookie("token")).current;
  const role = useRef(getCookie("role")).current;
  const [searchQuery, setSearchQuery] = useState("");
  const [dataUser, setDataUser] = useState({});
  const [dataRole, setDataRole] = useState({});
  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("Từ khóa tìm kiếm:", query);
  };
  useEffect(() => {
    const fetchApi = async () => {
      const res = await getData(`roles/${role}`);
      setDataRole(res.result.data);
      const user = await getData(`users/detail/${token}`);

      if(user.status === 200){
        setDataUser(user.result.data);
        setCookie("role",user.result.data.role_id,1)
      }
      if (user.status === 404){
        eraseCookie("token");
        eraseCookie("role");
        navigate("/login")
      }
   
    };
    fetchApi();
  }, []);
  
  return (
    <>
      <div className="layout-container">
        <Header dataUser={dataUser} dataRole={dataRole} role={role} />
        <main className="main-content-product">
          <TopBar titlePage={titlePage} check={"Phân quyền"} onSearch={handleSearch} />
          <Outlet context={{ searchQuery }} />
        </main>
      </div>
    </>
  );
}
export default memo(LayoutDefault);
