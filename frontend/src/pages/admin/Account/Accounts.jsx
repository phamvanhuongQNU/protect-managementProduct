import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getData, deleteData } from "../../../API/getAPI";

import "./Accounts.css";
import { getCookie } from "../../../utils/cookie";
import Account from "./Account";

const Accounts = () => {
  const role = getCookie("role");
  const token = getCookie("token");
  const [roleEmployee, setRoleEmployee] = useState([]);
  const [dataUser, setDataUser] = useState([]);

  const [permissions, setPermissions] = useState([]);

  const fetchPermission = async () => {
    const permission = await getData(`roles/role/${token}`);
   
    setPermissions(permission.result.data.permissions);
    
  };
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getData("users");
      const employeeRole = await getData(`roles/NV`);
      setRoleEmployee(employeeRole.result.data.permissions);
      const newDataUser = data.result.data.filter(
        (item) => item.token !== token
      );
      setDataUser(newDataUser);
      fetchPermission();
    };
    fetchApi();
  }, [token]);
 
  // sự kiện xoá người dùng
  const handleDeleted = (id) => {
    const deleteFetch = async () => {
      await deleteData(`users/delete/${id}`);
      
    };
    const newDataUser = dataUser.filter((item) => item._id !== id);
    deleteFetch();
    setDataUser(newDataUser);
    
  };

  return (
    <>
      {(permissions.includes("read_account")) && (
        <>
          <div className="add-account">
            {(role === "QTV" || roleEmployee.includes("add_account")) && (
              <Link onClick={fetchPermission} to={"create"} className="add-button">
                Thêm Tài Khoản
              </Link>
            )}
          </div>

          <div className="user-list">
            <table className="user-table">
              <thead>
                <tr>
                  
                  <th>STT</th>
                  <th>Tên Tài Khoản</th>
                  <th>Email</th>
                  <th>Cấp</th>
                  <th>Hành Động</th>
                </tr>
              </thead>
              <tbody>
                {[...dataUser].map((item, index) => (
                  <Account
                    role={role}
                    roleEmployee={roleEmployee}
                    handleDeleted={handleDeleted}
                    index={index}
                    data={item}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <div className="bottom-bar-account"></div>
        </>
      ) }
    </>
  );
};

export default Accounts;
