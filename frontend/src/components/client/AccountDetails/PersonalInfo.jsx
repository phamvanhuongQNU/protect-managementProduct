import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PersonalInfo.css";

const PersonalInfo = ({data}) => {
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
        <strong>Tên:</strong> <span>{data.fullName}</span>
      </div>
      <div className="info-item">
        <strong>Email:</strong> <span>{data.email}</span>
      </div>
      <div className="info-item">
        <strong>Số điện thoại:</strong> <span>{data.phone}</span>
      </div>
      <div className="info-item">
        <strong>Địa chỉ:</strong> <span>{data.address && `${data.address.province},${data.address.district},${data.address.ward ? data.address.ward : "" }`}</span>
      </div>
      <Link to={"/account/edit"}>
        <button className="update-btn">Cập nhật thông tin</button>
      </Link>
    </div>
  );
};

export default PersonalInfo;
