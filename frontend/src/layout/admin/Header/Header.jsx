import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { CiUser } from "react-icons/ci";
import { FaProductHunt, FaUserShield } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { getData } from "../../../API/getAPI";
const Header = ({ dataUser, dataRole, role }) => {
  const [roleEmloyee, setRoleEmployee] = useState({ permissions: [] });
  useEffect(() => {
    const fetchApi = async () => {
      const res = await getData(`roles/NV`);
      setRoleEmployee(res.result.data);
    };
    fetchApi();
  }, []);
 
  return (
    <header className="header-container">
      <div className="logo-container">
        <div className="logo">
          <img src="/Lightning-icon-vector-07.svg" alt="logo" />
        </div>
        <div className="logo-text">
          <h1>ADMIN NIMBUS</h1>
        </div>
      </div>
      <div className="info-user">
        <div className="info-user-name">{dataUser.fullName}</div>
        <div className="info-user-permission">{dataRole.name}</div>
      </div>
      <div className="header-menu">
        <ul>
          <li>
            {role === "QTV" && (
              <NavLink 
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "isActive" : ""
                }
                to={"/admin/permissions"}
              >
                {" "}
                <FaUserShield className="icon-menu" /> Phân quyền
              </NavLink>
            )}
          </li>
          {([...roleEmloyee.permissions].includes("read_account") ||
            role === "QTV") && (
            <li>
              <NavLink 
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "isActive" : ""
                }
                to={"/admin/account"}
              >
                <CiUser className="icon-menu" />
                Tài Khoản
              </NavLink>
            </li>
          )}
          {([...roleEmloyee.permissions].includes("read_product") ||
            role === "QTV") && (
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "isActive" : ""
                }
                to={"/admin/products"}
              >
                <FaProductHunt className="icon-menu" />
                Sản Phẩm
              </NavLink>
            </li>
          )}

          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "isActive" : ""
              }
              to={"/admin/oder"}
            >
              {" "}
              <BsCart4 className="icon-menu" /> Đơn hàng
            </NavLink>
          </li>

          {([...roleEmloyee.permissions].includes("read_category") ||
            role === "QTV") && (
            <li>
              {" "}
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "isActive" : ""
                }
                to={"/admin/category"}
              >
                {" "}
                <BiCategory className="icon-menu" /> Danh mục
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
