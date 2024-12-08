import React from "react";
import PersonalInfo from "../../../components/client/AccountDetails/PersonalInfo";
import OrderHistory from "../../../components/client/AccountDetails/OrderHistory";
import "./AccountDetails.css";

const AccountDetail = () => {
  return (
    <div className="account-details-container">
      <PersonalInfo />
      <OrderHistory />
    </div>
  );
};

export default AccountDetail;
