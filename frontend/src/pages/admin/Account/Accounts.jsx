import React from "react";
import {useEffect,useState} from "react";
import {Link} from "react-router-dom"
import {getData,deleteData} from '../../../API/getAPI'

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
  // sự kiện xoá người dùng
  const handleDeleted = (id)=>{
    const deleteFetch = async ()=>{
      const result = await deleteData(`users/delete/${id}`)
      console.log(id)
    }
    const newDataUser = dataUser.filter(item => (item._id !== id))
    deleteFetch();
    setDataUser(newDataUser)
    console.log(newDataUser)
  }

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
            {[...dataUser].map((item,index) =>(<Account handleDeleted={handleDeleted} index={index} data={item}/>))}
           
          </tbody>
        </table>
      </div>

      <div className="bottom-bar-account">
       
      </div>
    </>
  );
};

export default Accounts;
