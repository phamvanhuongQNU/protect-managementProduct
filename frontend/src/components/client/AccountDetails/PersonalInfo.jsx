import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PersonalInfo.css";

const PersonalInfo = () => {
  // để tạm tại không biết viết :))))
  const [userInfo, setUserInfo] = useState({
    name: "Đặng Ngọc Việt",
    email: "lamki538@gmail.com",
    phone: "0123456789",
    address: "Quy Nhơn, Việt Nam",
  });

  return (
    <div className="personal-info">
      <h2>Thông tin cá nhân</h2>
      <div className="info-item">
        <strong>Tên:</strong> <span>{userInfo.name}</span>
      </div>
      <div className="info-item">
        <strong>Email:</strong> <span>{userInfo.email}</span>
      </div>
      <div className="info-item">
        <strong>Số điện thoại:</strong> <span>{userInfo.phone}</span>
      </div>
      <div className="info-item">
        <strong>Địa chỉ:</strong> <span>{userInfo.address}</span>
      </div>
      <Link to={"/account/edit"}>
        <button className="update-btn">Cập nhật thông tin</button>
      </Link>
    </div>
  );
};

export default PersonalInfo;
