import  { useEffect, useState } from "react";
import PersonalInfo from "../../../components/client/AccountDetails/PersonalInfo";
import OrderHistory from "../../../components/client/AccountDetails/OrderHistory";
import "./AccountDetails.css";
import { getData } from "../../../API/getAPI";
import { getCookie,eraseCookie } from "../../../utils/cookie";
import { useNavigate } from "react-router-dom";
const AccountDetail = () => {
  const [dataUser,setDataUser] = useState({});
  const token = getCookie("token")
  const navigate = useNavigate()
  const handleLogout = ()=>{
    if (token) eraseCookie(token)
    if(getCookie("role")) eraseCookie("role");

    navigate("/login")

  }
  useEffect(()=>{
    const fetchApi = async ()=>{
      const res = await getData(`/user/detail/${token}`,false);
      setDataUser(res.result.data);
    }
    fetchApi();
  },[token])
  console.log(dataUser)
  return (
    <div className="account-details-container">
      <button onClick={handleLogout} className="btn-logout">Đăng xuất</button>
      <PersonalInfo data={dataUser} />
      <OrderHistory data={dataUser} />
    </div>
  );
};

export default AccountDetail;
