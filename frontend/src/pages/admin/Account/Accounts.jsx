import React from "react";
import {Link} from "react-router-dom"

import "./Accounts.css";
import Account from "./Account";

const Accounts = () => {
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
           <Account/>
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

export default Accounts;
