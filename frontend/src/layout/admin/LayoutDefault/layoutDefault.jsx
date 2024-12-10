import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import TopBar from "../TopBar/TopBar";
import "./style.css";
import { useState, useEffect } from "react";
import { getData } from "../../../API/getAPI";
import { getCookie } from "../../../utils/cookie";
function LayoutDefault({ titlePage }) {
  const token = getCookie("token");
  const role = getCookie("role");
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
      setDataUser(user.result.data);
    };
    fetchApi();
  }, []);
  
  return (
    <>
      <div className="layout-container">
        <Header dataUser={dataUser} dataRole={dataRole} role={role} />
        <main className="main-content-product">
          <TopBar titlePage={titlePage} onSearch={handleSearch} />
          <Outlet context={{ searchQuery }} />
        </main>
      </div>
    </>
  );
}
export default LayoutDefault;
