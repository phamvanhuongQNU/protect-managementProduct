import "./EditAccount.css";
import { getData, updateData } from "../../../API/getAPI";
import { getCookie } from "../../../utils/cookie";
import { useEffect, useState } from "react";
import {modalSuccess,modalFailed} from '../../../components/client/Swal/index'
const EditAccount = () => {
  const [dataUser, setDataUser] = useState({});
  const token = getCookie("token");
  const [dataAddress,setDataAddress] =useState({});
  const hanldChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataUser({
      ...dataUser,
      [name] : value
    })
  };
  const hanldChangeAddress = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataAddress({
      ...dataAddress,
      [name] : value
    })
  };
  const handleOnSubmit =async ()=>{
    const body = {
      fullName : dataUser.fullName,
      email : dataUser.email,
      phone : dataUser.phone,
      address : dataAddress
    }
    const res = await updateData(`/user/edit/${token}`,body,false);
    if (res.status === 200){
      modalSuccess("Chỉnh sửa thông tin người dùng thành công")
    }
    else{
      modalFailed("Chỉnh sửa thất bại")
    }
  }
  useEffect(() => {
    const fetchApi = async () => {
      const res = await getData(`/user/detail/${token}`, false);
      setDataUser(res.result.data);
      setDataAddress(res.result.data.address)
    };
    fetchApi();
  }, [token]);
  console.log(dataUser)
  return (
    <div className="edit-account-container">
      <div className="edit-account">
        <h2>Cập nhật thông tin cá nhân</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Tên</label>
            <input
              type="text"
              id="name"
              name="fullName"
              value={dataUser.fullName}
              onChange={hanldChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={dataUser.email}
              onChange={hanldChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Số điện thoại</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={dataUser.phone}
              onChange={hanldChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Địa chỉ</label>
            <div className="box-address">
              <input
                type="text"
                id="address"
                name="province"
                value={dataUser.address && dataAddress.province}
                placeholder="Tỉnh/Thành phố"
                onChange={hanldChangeAddress}
              />
              <input
                type="text"
                id="address"
                name="district"
                value={dataUser.address && dataAddress.district}
                placeholder="Huyện/Thị xã"
                onChange={hanldChangeAddress}
              />
              <input
                type="text"
                id="address"
                name="ward"
                value={dataUser.address && dataAddress.ward}
                placeholder="Xã phường"
                onChange={hanldChangeAddress}
              />
              <input
                type="text"
                id="address"
                name="street"
                value={dataUser.address && dataAddress.street}
                placeholder="Đường"
                onChange={hanldChangeAddress}
              />
            </div>
          </div>
          <button onClick={handleOnSubmit} type="button" className="btn-submit">
            Cập nhật thông tin
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditAccount;
