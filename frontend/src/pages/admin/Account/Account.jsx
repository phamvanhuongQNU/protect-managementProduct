import React from "react";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import "./Account.css";

const Account = () => {
  return (
    <>
      <div className="add-account">
        <button className="add-button">Thêm Tài Khoản</button>
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
            {[...Array(4)].map((_, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{index + 1}</td>
                <td>Phạm Văn Hương</td>
                <td>huongtk@gmail.com</td>
                <td>Admin</td>
                <td>
                  <a href="#" className="detail">
                    Chi Tiết
                  </a>
                  <a href="#" className="edit">
                    <AiFillEdit />
                  </a>

                  <a href="#" className="delete">
                    <AiFillDelete />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bottom-bar-account">
        <div className="pagination-buttons-account">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </div>
      </div>
    </>
  );
};

export default Account;
