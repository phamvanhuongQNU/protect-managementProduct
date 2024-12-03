import React from "react";
import {useEffect,useState} from "react";
import {Link} from "react-router-dom"
import {getData} from '../../../API/getAPI'

import "./Accounts.css";
import Account from "./Account";

const Accounts = () => {
  const [dataUser,setDataUser] = useState([]);
  useEffect(()=>{
    const fetchApi = async ()=>{
      const data = await getData("users");
      
      setDataUser(data.result.data);
    }
    fetchApi();
  },[])
  console.log(dataUser)
  return (
    <>
      <div className="add-account">
        <Link to={'create'} className="add-button">Thêm Tài Khoản</Link>
      </div>

      <div className="user-list">
        <table className="user-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>STT</th>
              <th>Tên Tài Khoản</th>
              <th>Email</th>
              <th>Cấp</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
           <Account data={dataUser}/>
          </tbody>
        </table>
      </div>

      <div className="bottom-bar-account">
       
      </div>
    </>
  );
};

export default Accounts;
